import longNumber from './longNumber';

const isInvalidPrecision = precision =>
  isNaN(parseInt(precision)) &&
  precision % 1 === 0 &&
  precision >= 0 &&
  precision <= 20;

export const toFixed = (number, precision) => {
  if (!isInvalidPrecision(precision)) {
    number = number.toFixed(precision);
  }

  return number.toString().replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1');
};

export const isInvalidNumber = number =>
  isNaN(parseFloat(number)) || !isFinite(number);

export default (number, precision, suffixes) => {
  const threshold = 9999;
  const metricSuffix = [
    { n: 1e12, suffix: suffixes.TRILLION },
    { n: 1e9, suffix: suffixes.BILLION },
    { n: 1e6, suffix: suffixes.MILLION },
    { n: 1e3, suffix: suffixes.THOUSAND },
  ];

  if (isInvalidNumber(number)) {
    return '-';
  }

  if (number <= threshold) {
    return longNumber(number, precision);
  }

  for (let i = 0; i < metricSuffix.length; i++) {
    if (number >= metricSuffix[i].n) {
      return `${toFixed(number / metricSuffix[i].n, precision)}${
        metricSuffix[i].suffix
      }`;
    }
  }
};
