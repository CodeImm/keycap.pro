import ky from 'ky';

// import { ServerError } from './types';

const client = ky.extend({
  prefixUrl: 'http://localhost:3000/api',
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('Content-Type', 'application/json');
      },
    ],
    // beforeError: [
    //     async error => {
    //       const { message } = (await error.response.json()) as ServerError;
    //       if (message) {
    //         error.message = message;
    //       }
    //       return error;
    //     },
    //   ],
  },
});

export default client;
