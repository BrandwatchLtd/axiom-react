import { svgDefineOnce } from '@brandwatch/axiom-utils';

export default () => {
  ['subtle', 'white'].forEach(color => {
    svgDefineOnce(`
      <linearGradient id="ax-progress-infinite__filter--${color}">
        <stop class="ax-progress-infinite__arc-gradient-stop--${color}" offset="0%"></stop>
        <stop class="ax-progress-infinite__arc-gradient-stop--${color}" offset="50%"></stop>
        <stop class="ax-progress-infinite__arc-gradient-stop--${color}" offset="90%"></stop>
      </linearGradient>
    `);
  });
};
