import { DateTime } from 'luxon';

export const FORMAT_MAP = {
  short: 'dd MMM',
  medium: 'dd MMM yyyy',
  long: 'EEE, dd MMM yyyy',
  time: 'HH:mm',
  timezone: '(\'UTC\'ZZ)',
};

export default (formatStr) => date => DateTime.fromJSDate(date).toFormat(formatStr);
