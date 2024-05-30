export const paths = {
  home: '/',
  exercises: '/exercises',
  signin: '/auth/login',
  signup: '/auth/signup',
  complete: '/auth/complete',
  testing: '/testing',
  policy: '/policy',
  profile: '/profile',
  account: '/account',
  statistics: '/statistics',
  settings: '/profile/settings',
};

export const publicPages = [paths.home, paths.exercises];
export const protectedPages = [paths.testing, paths.profile, paths.statistics, paths.settings];

export const authPages = [paths.signin, paths.signup, paths.complete];
