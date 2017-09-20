import format from 'date-fns/format';

export const FORMAT_MAP = {
  short: 'DD MMM',
  medium: 'DD MMM YYYY',
  long: 'ddd, DD MMM YYYY',
  time: 'HH:mm',
  timezone: '(UTCZ)',
};

export default (formatStr) => date => format(date, formatStr);
