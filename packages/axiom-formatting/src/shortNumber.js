import toSuffixed from './toSuffixed';

export default (number, precision = 0) => toSuffixed(number, precision, {
  TRILLION: ' trillion',
  BILLION: ' billion',
  MILLION: ' million',
  THOUSAND: ' thousand',
});
