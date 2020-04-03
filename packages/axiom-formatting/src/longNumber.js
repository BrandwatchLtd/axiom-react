import { isInvalidNumber, toFixed } from "./toSuffixed";

export const NUMBER_SEPARATOR = "\u2009";

export default (number, precision = 0) => {
  if (isInvalidNumber(number)) {
    return "-";
  }

  const [integer, fraction] = toFixed(number, precision).split(".");
  const formatted = parseFloat(integer)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${NUMBER_SEPARATOR}`);

  return fraction ? `${formatted}.${fraction}` : formatted;
};
