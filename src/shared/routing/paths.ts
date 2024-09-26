export const paths = {
  home: '/',
  exercises: '/exercises',

  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
  },

  testing: '/testing',
  policy: '/policy',

  profile: {
    main: '/profile',
    setup: '/profile/setup',
    settings: '/profile/settings',
  },

  account: '/account',
  statistics: '/statistics',
};

export const publicPages = [paths.home, paths.exercises];
export const protectedPages = [
  paths.testing,
  paths.statistics,
  paths.profile.main,
  paths.profile.setup,
  paths.profile.settings,
];

export const authPages = [paths.auth.login, paths.auth.signup];
