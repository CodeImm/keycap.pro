import { cookies } from 'next/headers';

import { OAuth2RequestError } from 'arctic';

import { Role } from '@/entities/user';
import UserModel from '@/entities/user/model/User';
import { github, lucia } from '@/shared/config/lucia-auth/auth';
import dbConnect from '@/shared/config/mongodb/dbConnect';

const fetchGitHubEmails = async (accessToken: string): Promise<GitHubEmail[]> => {
  const res = await fetch('https://api.github.com/user/emails', {
    headers: { Authorization: `token ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub user emails');
  }

  return res.json();
};

const getPrimaryEmail = (emails: GitHubEmail[]): GitHubEmail | undefined => {
  return emails.find((email) => email.primary && email.verified);
};

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const storedState = cookies().get('github_oauth_state')?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubProfile = await githubUserResponse.json();

    await dbConnect();
    // Replace this with your own DB client.
    const existingUser = await UserModel.findOne({ github_id: githubUser.id });

    if (existingUser) {
      const session = await lucia.createSession(existingUser._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
        },
      });
    }

    const emails = await fetchGitHubEmails(tokens.accessToken);
    const primaryEmail = getPrimaryEmail(emails);

    const newUser = await UserModel.create({
      github_id: githubUser.id,
      email: primaryEmail?.email ?? emails[0]?.email,
      imageURL: githubUser.avatar_url,
      role: Role.User,
      firstName: githubUser.name,
      lastName: null,
    });
    const userId = newUser._id;

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    });
  } catch (e) {
    console.log(e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

interface GitHubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: 'public' | 'private';
}

/** @see [Get the authenticated user](https://docs.github.com/en/rest/users/users#get-the-authenticated-user) */
export interface GitHubProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username?: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  suspended_at?: string | null;
  collaborators?: number;
  two_factor_authentication: boolean;
  plan?: {
    collaborators: number;
    name: string;
    space: number;
    private_repos: number;
  };
  [claim: string]: unknown;
}
