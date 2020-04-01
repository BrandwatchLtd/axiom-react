import { DateTime } from 'luxon';

export default date => {
  const dateTime = DateTime.fromJSDate(date).toUTC();
  return `${dateTime.toFormat('yyyy-MM-dd')}_at_${dateTime.toFormat(
    'HH.mm.ss'
  )}_UTC`;
};
