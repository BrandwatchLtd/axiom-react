import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import TextInputIconWrapper from "./TextInputIconWrapper";
import TooltipContext from "../Tooltip/TooltipContext";
import TooltipContent from "../Tooltip/TooltipContent";
import Icon from "../Icon/Icon";

const getComponent = (props) =>
  renderer.create(<TextInputIconWrapper {...props} />);

describe("TextInputIconWrapper", () => {
  let props;

  beforeEach(() => {
    props = {
      children: <Icon name="dot" />,
    };
  });

  it("renders with defaultProps", () => {
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with align="left"', () => {
    props.align = "left";
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with onClick", () => {
    props.onClick = () => {};
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with tooltip when string passed", () => {
    props.tooltip = "I am a tooltip";

    const component = getComponent(props);
    const tree = component.toJSON();

    const wrapper = shallow(<TextInputIconWrapper {...props} />);
    wrapper.simulate("mouseenter");

    expect(tree).toMatchSnapshot();
    expect(wrapper.find(TooltipContent)).toHaveLength(1);
  });

  it("renders with tooltip when TooltipContext passed", () => {
    props.tooltip = (
      <TooltipContext>
        <TooltipContent size="tiny">I am a tooltip</TooltipContent>
      </TooltipContext>
    );

    const component = getComponent(props);
    const tree = component.toJSON();

    const wrapper = shallow(<TextInputIconWrapper {...props} />);
    wrapper.simulate("mouseenter");

    expect(tree).toMatchSnapshot();
    expect(wrapper.find(TooltipContext)).toHaveLength(1);
  });
});
