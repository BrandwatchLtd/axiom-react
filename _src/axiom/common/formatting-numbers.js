import numbro from 'numbro';

const NUMBER_SEPARATOR = '\u2009';

function isInvalidNumber(number) {
  return (isNaN(parseFloat(number)) || !isFinite(number));
}

function decimals(precision) {
  return (new Array(
    isInvalidNumber(precision) ? 0 : Math.max(0, Math.min(20, parseInt(precision, 10)))
  )).fill('0').join('');
}

function withDecimals(format, precision) {
  const decimal = decimals(precision);

  return decimal ? `${format}.[${decimal}]` : format;
}

export function shortNumber(number, precision = 0) {
  if (isInvalidNumber(number)) {
    return '-';
  }

  return numbro(number)
    .format(`${withDecimals('0,0', precision)}a`)
    .replace(/,/g, NUMBER_SEPARATOR)
    .toUpperCase();
}

export function longNumber(number, precision = 0) {
  if (isInvalidNumber(number)) {
    return '-';
  }

  return numbro(number)
    .format(`${withDecimals('0,0', precision)}`)
    .replace(/,/g, NUMBER_SEPARATOR)
    .toUpperCase();
}
