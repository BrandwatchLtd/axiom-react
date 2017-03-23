import assert from 'assert';
import { NUMBER_SEPARATOR, shortNumber, longNumber, tinyNumber } from 'bw-axiom';

const NS = NUMBER_SEPARATOR;

describe('Number formatting', () => {
  describe('longNumber', () => {
    it('invalid', () => {
      assert.equal(longNumber(null), '-');
      assert.equal(longNumber(undefined), '-');
      assert.equal(longNumber(true), '-');
      assert.equal(longNumber('a'), '-');
    });

    it('without precision', () => {
      assert.equal(longNumber(9999.5555, false), `9${NS}999.5555`);
    });

    it('strips extra padding', () => {
      assert.equal(longNumber(9999, 20), `9${NS}999`);
    });

    it('default precision', () => {
      assert.equal(longNumber(9999.5555), `10${NS}000`);
    });

    it('with precision', () => {
      assert.equal(longNumber(9999.5555, 1), `9${NS}999.6`);
      assert.equal(longNumber(9999.5555, 2), `9${NS}999.56`);
      assert.equal(longNumber(9999.5555, 3), `9${NS}999.556`);
      assert.equal(longNumber(9999.5555, 4), `9${NS}999.5555`);
    });
  });

  describe('shortNumber', () => {
    it('invalid', () => {
      assert.equal(shortNumber(null), '-');
      assert.equal(shortNumber(undefined), '-');
      assert.equal(shortNumber(true), '-');
      assert.equal(shortNumber('a'), '-');
    });

    it('below the threshold', () => {
      assert.equal(shortNumber(9999), `9${NS}999`);
    });

    it('without precision', () => {
      assert.equal(shortNumber(15555, false), '15.555 thousand');
    });

    it('default precision', () => {
      assert.equal(shortNumber(15555), '16 thousand');
      assert.equal(shortNumber(1555555), '2 million');
      assert.equal(shortNumber(1555555555), '2 billion');
      assert.equal(shortNumber(1555555555555), '2 trillion');
    });

    it('with precision', () => {
      assert.equal(shortNumber(15555, 1), '15.6 thousand');
      assert.equal(shortNumber(1555555, 1), '1.6 million');
      assert.equal(shortNumber(1555555555, 1), '1.6 billion');
      assert.equal(shortNumber(1555555555555, 1), '1.6 trillion');
    });
  });

  describe('tinyNumber', () => {
    it('invalid', () => {
      assert.equal(tinyNumber(null), '-');
      assert.equal(tinyNumber(undefined), '-');
      assert.equal(tinyNumber(true), '-');
      assert.equal(tinyNumber('a'), '-');
    });

    it('below the threshold', () => {
      assert.equal(tinyNumber(9999), `9${NS}999`);
    });

    it('without precision', () => {
      assert.equal(tinyNumber(15555, false), '15.555K');
    });

    it('default precision', () => {
      assert.equal(tinyNumber(15555), '16K');
      assert.equal(tinyNumber(1555555), '2M');
      assert.equal(tinyNumber(1555555555), '2B');
      assert.equal(tinyNumber(1555555555555), '2T');
    });

    it('with precision', () => {
      assert.equal(tinyNumber(15555, 1), '15.6K');
      assert.equal(tinyNumber(1555555, 1), '1.6M');
      assert.equal(tinyNumber(1555555555, 1), '1.6B');
      assert.equal(tinyNumber(1555555555555, 1), '1.6T');
    });
  });
});
