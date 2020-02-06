import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputIcon from './TextInputIcon';
import TooltipContext from '../Tooltip/TooltipContext';
import TooltipContent from '../Tooltip/TooltipContent';

const getComponent = (props) =>
  renderer.create(
    <TextInputIcon { ...props } />
  );

describe('TextInputIcon', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'twitter',
    };
  });

  it('renders with defaultProps', () => {
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with align="left"', () => {
    props.align = 'left';
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    props.onClick = () => {};
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with the correct iconColor', () => {
    props.iconColor = 'facebook';
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with tooltip when string passed', () => {
    props.tooltip = 'I am a tooltip';

    const component = getComponent(props);
    const tree = component.toJSON();

    const wrapper = shallow(<TextInputIcon { ...props } />);
    wrapper.simulate('mouseenter');

    expect(tree).toMatchSnapshot();
    expect(wrapper.find(TooltipContent)).toHaveLength(1);
  });

  it('renders with tooltip when TooltipContext passed', () => {
    props.tooltip = (
      <TooltipContext><TooltipContent size="tiny">I am a tooltip</TooltipContent></TooltipContext>
    );

    const component = getComponent(props);
    const tree = component.toJSON();

    const wrapper = shallow(<TextInputIcon { ...props } />);
    wrapper.simulate('mouseenter');

    expect(tree).toMatchSnapshot();
    expect(wrapper.find(TooltipContext)).toHaveLength(1);
  });
});
