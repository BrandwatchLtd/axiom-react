import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from './CheckBox';

const getComponent = (props = {}) =>
  renderer.create(<CheckBox {...props}>Lorem ipsum</CheckBox>);

describe('CheckBox', () => {
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

  it('renders with indeterminate', () => {
    const component = getComponent({ indeterminate: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with indeterminate and checked', () => {
    const component = getComponent({ indeterminate: true, checked: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
