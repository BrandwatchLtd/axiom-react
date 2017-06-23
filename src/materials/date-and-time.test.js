import { filenameDate } from 'bw-axiom';

describe('filenameDate and time formatting', () => {
  describe('longNumber', () => {
    it('formats dates correctly', () => {
      expect(filenameDate(new Date(0))).toBe('1970-01-01_at_00.00.00_UTC');
    });
  });
});
