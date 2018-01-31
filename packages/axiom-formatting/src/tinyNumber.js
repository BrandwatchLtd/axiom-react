import toSuffixed from './toSuffixed';

export default (number, precision = 0) => toSuffixed(number, precision, {
  TRILLION: 'T',
  BILLION: 'B',
  MILLION: 'M',
  THOUSAND: 'K',
});
