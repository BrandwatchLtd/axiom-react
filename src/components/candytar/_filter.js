import svgDefineOnce from '../../utils/svgDefineOnce';

export default () => svgDefineOnce(`
  <filter id="ax-candytar__filter">
    <feColorMatrix type="matrix" values="1 0 0 0    -0.27
                                         0 1 0 0    -0.27
                                         0 0 1 0    -0.27
                                         0 0 0 0.55  0" />
  </filter>
`);
