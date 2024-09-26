/* eslint-disable no-var */
import { MongoClient } from 'mongodb';
import _mongoose, { connect } from 'mongoose';

// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/locales/ru.json');
declare interface IntlMessages extends Messages {}

declare global {
  namespace globalThis {
    var mongoose: {
      promise: ReturnType<typeof connect> | null;
      conn: typeof _mongoose | null;
    };
    var _mongoClientPromise: Promise<MongoClient>;
  }
}
