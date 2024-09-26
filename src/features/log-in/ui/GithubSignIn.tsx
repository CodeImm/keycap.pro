import Link from 'next/link';

export const GithubSignIn = () => {
  // TODO: добавить CallbackUrl, в shared/lib есть getCallbackUrl
  return <Link href={`/api/login/github`}>Sign in with Github</Link>;
};
