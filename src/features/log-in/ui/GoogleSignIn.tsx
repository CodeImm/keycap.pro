import Link from 'next/link';

// import { useSearchParams } from 'next/navigation';

export const GoogleSignIn = () => {
  // const searchParams = useSearchParams();

  // const callbackUrl = searchParams.get('callbackUrl');

  return <Link href={`/login/google`}>Sign in with Google</Link>;
};
