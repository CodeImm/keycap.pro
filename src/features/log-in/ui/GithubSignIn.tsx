// 'use client';
import Link from 'next/link';

// import { useSearchParams } from 'next/navigation';

export const GithubSignIn = () => {
  // const searchParams = useSearchParams();

  // const callbackUrl = searchParams.get('callbackUrl');
  // ?callbackUrl=${callbackUrl}
  return <Link href={`/api/login/github`}>Sign in with Github</Link>;
};
