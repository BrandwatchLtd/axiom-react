import stringToColor from './stringToColor';

const colors = [
  'rose',
  'pink',
  'purple',
  'lilac',
  'blue',
  'teal',
  'green',
  'chartreuse',
  'amber',
  'orange',
  'brown',
  'grey',
];

const randomString = () => Math.random().toString(36).substring(7);

describe('stringToColor', () => {
  it('works with empty strings', () => {
    expect(stringToColor('')).toBe('rose');
  });

  it('maps a string to a brand color', () => {
    expect(colors).toContain(stringToColor(randomString()));
  });

  it('maps a string to a color deterministically', () => {
    const testString = randomString();
    expect(stringToColor(testString)).toBe(stringToColor(testString));
  });

  it('maps different strings to different colors', () => {
    expect(stringToColor('a')).toBe('orange');
    expect(stringToColor('b')).toBe('brown');
  });
});
