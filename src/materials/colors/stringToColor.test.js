import stringToColor from './stringToColor';
import productColors from './productColors';

const randomString = () => Math.random().toString(36).substring(7);

describe('stringToColor', () => {
  it('works with empty strings', () => {
    expect(stringToColor('')).toBe('tiny-clanger');
  });

  it('maps a string to a brand color', () => {
    expect(productColors).toContain(stringToColor(randomString()));
  });

  it('maps a string to a color deterministically', () => {
    const testString = randomString();
    expect(stringToColor(testString)).toBe(stringToColor(testString));
  });

  it('maps different strings to different colors', () => {
    expect(stringToColor('a')).toBe('blast-off');
    expect(stringToColor('b')).toBe('ground-control');
  });
});
