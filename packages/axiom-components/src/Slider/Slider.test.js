import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';

const getComponent = (props = {}) => {
  const newProps = {
    disabled: false,
    min: 0,
    max: 20,
    value: 6.5,
    onChange: jest.fn(),
    ...props,
  };
  return renderer.create(<Slider {...newProps} />);
};

describe('Slider', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const component = getComponent({
      size: 'medium',
      step: 0.1,
      valueFormatter: x => Math.floor(x),
      withTooltip: true,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
