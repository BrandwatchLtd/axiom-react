import format from 'date-fns/format';

const FORMAT_MAP = {
  short: 'DD MMM',
  medium: 'DD MMM YYYY',
  long: 'ddd, DD MMM YYYY',
  time: 'HH:mm',
  timezone: '(UTCZ)',
};

const longDateWithTimezoneFormat = `${FORMAT_MAP.long} ${FORMAT_MAP.time} ${FORMAT_MAP.timezone}`;

function formatDate (formatStr) {
  return date => format(date, formatStr);
}

export function filenameDate(date){
  return `${format(date, 'YYYY-MM-DD')}_at_${format(date, 'HH.mm.ss')}_UTC`;
}

export const shortDate = formatDate(FORMAT_MAP.short);
export const mediumDate = formatDate(FORMAT_MAP.medium);
export const longDate = formatDate(FORMAT_MAP.long);
export const shortDateWithTime = formatDate(`${FORMAT_MAP.short} ${FORMAT_MAP.time}`);
export const mediumDateWithTime = formatDate(`${FORMAT_MAP.medium} ${FORMAT_MAP.time}`);
export const longDateWithTime = formatDate(`${FORMAT_MAP.long} ${FORMAT_MAP.time}`);
export const longDateWithTimezone = formatDate(longDateWithTimezoneFormat);
