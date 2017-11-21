// Prevent React 16 warnings on the console during tests using requestAnimationFrame
global.requestAnimationFrame = setTimeout;

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
