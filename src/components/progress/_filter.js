import { svgDefineOnce } from 'bw-axiom';

['subtle', 'white'].forEach(color => {
  svgDefineOnce(`
    <linearGradient id="ax-progress-infinite__filter--${ color }">
      <stop class="ax-progress-infinite__arc-gradient-stop--${ color }" offset="0%"></stop>
      <stop class="ax-progress-infinite__arc-gradient-stop--${ color }" offset="50%"></stop>
      <stop class="ax-progress-infinite__arc-gradient-stop--${ color }" offset="90%"></stop>
    </linearGradient>
  `);
});
