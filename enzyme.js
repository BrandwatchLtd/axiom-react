// Prevent React 16 warnings on the console during tests using requestAnimationFrame
global.requestAnimationFrame = setTimeout;

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
