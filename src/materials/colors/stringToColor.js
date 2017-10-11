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

export default string => colors[
  string.split('').reduce((acc, val) => acc + val.charCodeAt(), 0) % (colors.length - 1)
];
