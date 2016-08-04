const logoVerticalAspectRatio = 0.9;
const logoHorizontalAspectRatio = 5.54

const logoVerticalHeightSm = 120;
const logoVerticalHeightMd = 180;
const logoVerticalHeightLg = 240;

const logoHorizontalHeightSm = 20;
const logoHorizontalHeightMd = 40;
const logoHorizontalHeightLg = 60;

module.exports = {
  logoVerticalHeightSm: `${logoVerticalHeightSm}px`,
  logoVerticalHeightMd: `${logoVerticalHeightMd}px`,
  logoVerticalHeightLg: `${logoVerticalHeightLg}px`,

  logoVerticalWidthSm: `${logoVerticalHeightSm * logoVerticalAspectRatio}px`,
  logoVerticalWidthMd: `${logoVerticalHeightMd * logoVerticalAspectRatio}px`,
  logoVerticalWidthLg: `${logoVerticalHeightLg * logoVerticalAspectRatio}px`,

  logoHorizontalHeightSm: `${logoHorizontalHeightSm}px`,
  logoHorizontalHeightMd: `${logoHorizontalHeightMd}px`,
  logoHorizontalHeightLg: `${logoHorizontalHeightLg}px`,

  logoHorizontalWidthSm: `${logoHorizontalHeightSm * logoHorizontalAspectRatio}px`,
  logoHorizontalWidthMd: `${logoHorizontalHeightMd * logoHorizontalAspectRatio}px`,
  logoHorizontalWidthLg: `${logoHorizontalHeightLg * logoHorizontalAspectRatio}px`,
};
