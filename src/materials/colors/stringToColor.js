import brandColors from './brandColors';

export default string => brandColors[
  string.split('').reduce((acc, val) => acc + val.charCodeAt(), 0) % (brandColors.length - 1)
];
