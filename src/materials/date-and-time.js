import moment from 'moment';

const FORMAT_MAP = {
  short: 'DD MMM',
  medium: 'DD MMM YYYY',
  long: 'ddd, DD MMM YYYY',
  time: 'HH:kk',
  timezone: '(UTCZ)',
};

function formatDate(date, format) {
  return moment(date).format(format);
}

export function shortDate(date) {
  return formatDate(date, FORMAT_MAP.short);
}

export function mediumDate(date) {
  return formatDate(date, FORMAT_MAP.medium);
}

export function longDate(date) {
  return formatDate(date, FORMAT_MAP.long);
}

export function shortDateWithTime(date){
  return formatDate(date, `${FORMAT_MAP.short} ${FORMAT_MAP.time}`);
}

export function mediumDateWithTime(date){
  return formatDate(date, `${FORMAT_MAP.medium} ${FORMAT_MAP.time}`);
}

export function longDateWithTime(date){
  return formatDate(date, `${FORMAT_MAP.long} ${FORMAT_MAP.time}`);
}

export function longDateWithTimezone(date){
  return formatDate(date, `${FORMAT_MAP.long} ${FORMAT_MAP.time} ${FORMAT_MAP.timezone}`);
}
