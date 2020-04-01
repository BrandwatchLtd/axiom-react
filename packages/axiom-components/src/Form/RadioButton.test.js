import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';

const getComponent = (props = {}) =>
  renderer.create(<RadioButton {...props}>Lorem ipsum</RadioButton>);

describe('RadioButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with invalid', () => {
    const component = getComponent({ invalid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
