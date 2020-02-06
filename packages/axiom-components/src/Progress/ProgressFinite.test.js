import React from 'react';
import renderer from 'react-test-renderer';
import ProgressFinite from './ProgressFinite';

const getComponent = (props = {}) =>
  renderer.create(
    <ProgressFinite { ...props } />
  );

describe('ProgressFinite', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with percent props', () => {
    const component = getComponent({ percent: 50 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
