import { tinyNumber } from 'bw-axiom';

export function randomStatNumber(l = 30000, u = 999999) {
  return tinyNumber(Math.floor(Math.random() * (u - l + 1) + l), 1);
}
