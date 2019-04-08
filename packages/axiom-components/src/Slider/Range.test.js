import React from 'react';
import renderer from 'react-test-renderer';
import Range from './Range';

const getComponent = (props = {}) => {
  const newProps = { disabled: false, min: 0, max: 20, values: [3.03, 12.6], onChange: jest.fn(), ...props };
  return renderer.create(
    <Range { ...newProps }/>
  );
};

describe('Range', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const component = getComponent({ size: 'medium', step: 0.1, valueFormatter: x=>Math.floor(x), withTooltip: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
