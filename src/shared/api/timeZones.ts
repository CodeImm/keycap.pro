import client from '../config/ky';

export function fetchTimeZones() {
  return client.get('timezones');
}
