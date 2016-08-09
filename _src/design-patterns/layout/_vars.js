const layoutWidthSm = '768px';
const layoutWidthMd = '992px';
const layoutWidthLg = '1200px';

const breakpoints = [
  { id: 'sm', width: layoutWidthSm },
  { id: 'md', width: layoutWidthMd },
  { id: 'lg', width: layoutWidthLg },
];

module.exports = {
  layoutWidthSm,
  layoutWidthMd,
  layoutWidthLg,

  breakpoints,
  breakpointIds: breakpoints.map(({ id }) => id),
};
