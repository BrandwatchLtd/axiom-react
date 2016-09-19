import shortDate from './short-date';
import mediumDate from './medium-date';
import longDate from './long-date';

export const title = 'Date and Time';
export const id = 'data-and-time';

export const examples = [{
  name: 'Short Date',
  children: shortDate,
}, {
  name: 'Medium Date',
  children: mediumDate,
}, {
  name: 'Long Date',
  children: longDate,
}];
