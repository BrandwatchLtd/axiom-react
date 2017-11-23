import productColors from './productColors';

export default string => productColors[
  string.split('').reduce((acc, val) => acc + val.charCodeAt(), 0) % (productColors.length - 1)
];
