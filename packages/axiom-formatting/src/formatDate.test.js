import filenameDate from './filenameDate';
import longDate from './longDate';
import longDateWithTime from './longDateWithTime';
import longDateWithTimezone from './longDateWithTimezone';
import mediumDate from './mediumDate';
import mediumDateWithTime from './mediumDateWithTime';
import shortDate from './shortDate';
import shortDateWithTime from './shortDateWithTime';

describe('formatDate', () => {
  describe('filenameDate', () => {
    it('formats dates correctly', () => {
      expect(filenameDate(new Date(0))).toBe('1970-01-01_at_00.00.00_UTC');
    });
  });

  describe('longDate', () => {
    it('formats dates correctly', () => {
      expect(longDate(new Date(0))).toBe('Thu, 01 Jan 1970');
    });
  });

  describe('longDateWithTime', () => {
    it('formats dates correctly', () => {
      expect(longDateWithTime(new Date(0))).toBe('Thu, 01 Jan 1970 00:00');
    });
  });

  describe('longDateWithTimezone', () => {
    it('formats dates correctly', () => {
      expect(longDateWithTimezone(new Date(0), 'Etc/UTC')).toBe('Thu, 01 Jan 1970 00:00 (UTC+00:00)');
    });
  });

  describe('mediumDate', () => {
    it('formats dates correctly', () => {
      expect(mediumDate(new Date(0))).toBe('01 Jan 1970');
    });
  });

  describe('mediumDateWithTime', () => {
    it('formats dates correctly', () => {
      expect(mediumDateWithTime(new Date(0))).toBe('01 Jan 1970 00:00');
    });
  });

  describe('shortDate', () => {
    it('formats dates correctly', () => {
      expect(shortDate(new Date(0))).toBe('01 Jan');
    });
  });

  describe('shortDateWithTime', () => {
    it('formats dates correctly', () => {
      expect(shortDateWithTime(new Date(0))).toBe('01 Jan 00:00');
    });
  });
});
