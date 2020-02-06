import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';

const getComponent = (props = {}) =>
  renderer.create(
    <IconButton name="twitter" { ...props } />
  );

describe('IconButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large', 'huge'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
