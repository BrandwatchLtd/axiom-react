import { DateTime } from 'luxon';

const { fromJSDate } = DateTime;

export const buildMonthGrid = (date) => {
  const startMonth = fromJSDate(date).startOf('month');
  const daysToSkip = (startMonth.weekday - 1) % 7;
  const grid = [];

  for (let i = 0; i < daysToSkip; i++) {
    grid.push(null);
  }

  for (let i = 0; i < startMonth.daysInMonth; i++) {
    grid.push(startMonth.plus({ day: i }).toJSDate());
  }

  return grid.reduce((w, n, i) => {
    (w[i / 7 | 0] = w[i / 7 | 0] || []).push(n);
    return w;
  }, []);
};

export const addMonths = (date, months) => date && fromJSDate(date).plus({ months }).toJSDate();
export const dateOrNow = (date) => fromJSDate(date || new Date()).toJSDate();
export const getDayNumber = (date) => fromJSDate(date).toFormat('d');
export const getMonthName = (date) => fromJSDate(date).toFormat('MMMM');
export const getYearNumber = (date) => fromJSDate(date).toFormat('yyyy');

export const isAfterDay = (aDate, bDate) =>
  !!bDate && fromJSDate(aDate).endOf('day') > fromJSDate(bDate).endOf('day');

export const isBeforeDay = (aDate, bDate) => !!bDate && isAfterDay(bDate, aDate);

export const isBetweenDate = (date, aDate, bDate) =>
  !!aDate && !!bDate &&
  isAfterDay(date, aDate) &&
  isBeforeDay(date, bDate);

export const isSameDay = (aDate, bDate) =>
  !!bDate && fromJSDate(aDate).hasSame(fromJSDate(bDate), 'day');

export const isSameMonth = (aDate, bDate) =>
  !!bDate && fromJSDate(aDate).hasSame(fromJSDate(bDate), 'month');

export const isSameOrAfterMonth = (aDate, bDate) =>
  !!bDate && (
    isSameMonth(aDate, bDate) ||
    fromJSDate(aDate).endOf('month') > fromJSDate(bDate).endOf('month')
  );

export const isSameOrBeforeMonth = (aDate, bDate) =>
  !!bDate && (
    isSameMonth(aDate, bDate) ||
    fromJSDate(aDate).endOf('month') < fromJSDate(bDate).endOf('month')
  );

export const isOneOfDays = (date, dates) => dates.some(bDate => isSameDay(date, bDate));

export const orderDates = (aDate, bDate) =>
  isAfterDay(aDate, bDate)
    ? [bDate, aDate]
    : [aDate, bDate];
