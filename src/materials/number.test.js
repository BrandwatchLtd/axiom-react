import { NUMBER_SEPARATOR, shortNumber, longNumber, tinyNumber } from 'bw-axiom';

const NS = NUMBER_SEPARATOR;

describe('Number formatting', () => {
  describe('longNumber', () => {
    it('invalid', () => {
      expect(longNumber(null)).toBe('-');
      expect(longNumber(undefined)).toBe('-');
      expect(longNumber(true)).toBe('-');
      expect(longNumber('a')).toBe('-');
    });

    it('without precision', () => {
      expect(longNumber(9999.5555, false)).toBe(`9${NS}999.5555`);
    });

    it('strips extra padding', () => {
      expect(longNumber(9999, 20)).toBe(`9${NS}999`);
    });

    it('default precision', () => {
      expect(longNumber(9999.5555)).toBe(`10${NS}000`);
    });

    it('with precision', () => {
      expect(longNumber(9999.5555, 1)).toBe(`9${NS}999.6`);
      expect(longNumber(9999.5555, 2)).toBe(`9${NS}999.56`);
      expect(longNumber(9999.5555, 3)).toBe(`9${NS}999.556`);
      expect(longNumber(9999.5555, 4)).toBe(`9${NS}999.5555`);
    });
  });

  describe('shortNumber', () => {
    it('invalid', () => {
      expect(shortNumber(null)).toBe('-');
      expect(shortNumber(undefined)).toBe('-');
      expect(shortNumber(true)).toBe('-');
      expect(shortNumber('a')).toBe('-');
    });

    it('below the threshold', () => {
      expect(shortNumber(9999)).toBe(`9${NS}999`);
    });

    it('without precision', () => {
      expect(shortNumber(15555, false)).toBe('15.555 thousand');
    });

    it('default precision', () => {
      expect(shortNumber(15555)).toBe('16 thousand');
      expect(shortNumber(1555555)).toBe('2 million');
      expect(shortNumber(1555555555)).toBe('2 billion');
      expect(shortNumber(1555555555555)).toBe('2 trillion');
    });

    it('with precision', () => {
      expect(shortNumber(15555, 1)).toBe('15.6 thousand');
      expect(shortNumber(1555555, 1)).toBe('1.6 million');
      expect(shortNumber(1555555555, 1)).toBe('1.6 billion');
      expect(shortNumber(1555555555555, 1)).toBe('1.6 trillion');
    });
  });

  describe('tinyNumber', () => {
    it('invalid', () => {
      expect(tinyNumber(null)).toBe('-');
      expect(tinyNumber(undefined)).toBe('-');
      expect(tinyNumber(true)).toBe('-');
      expect(tinyNumber('a')).toBe('-');
    });

    it('below the threshold', () => {
      expect(tinyNumber(9999)).toBe(`9${NS}999`);
    });

    it('without precision', () => {
      expect(tinyNumber(15555, false)).toBe('15.555K');
    });

    it('default precision', () => {
      expect(tinyNumber(15555)).toBe('16K');
      expect(tinyNumber(1555555)).toBe('2M');
      expect(tinyNumber(1555555555)).toBe('2B');
      expect(tinyNumber(1555555555555)).toBe('2T');
    });

    it('with precision', () => {
      expect(tinyNumber(15555, 1)).toBe('15.6K');
      expect(tinyNumber(1555555, 1)).toBe('1.6M');
      expect(tinyNumber(1555555555, 1)).toBe('1.6B');
      expect(tinyNumber(1555555555555, 1)).toBe('1.6T');
    });
  });
});
