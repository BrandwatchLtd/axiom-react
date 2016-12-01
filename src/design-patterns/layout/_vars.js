const layoutWidthXs = '450px';
const layoutWidthSm = '768px';
const layoutWidthMd = '992px';
const layoutWidthLg = '1200px';

const breakpoints = [
  { id: 'small', width: layoutWidthSm },
  { id: 'medium', width: layoutWidthMd },
  { id: 'large', width: layoutWidthLg },
];

module.exports = {
  layoutWidthXs,
  layoutWidthSm,
  layoutWidthMd,
  layoutWidthLg,

  breakpoints,
  breakpointIds: breakpoints.map(({ id }) => id),
};
