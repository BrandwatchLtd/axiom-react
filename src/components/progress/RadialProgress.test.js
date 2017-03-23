import React from 'react';
import renderer from 'react-test-renderer';
import RadialProgress from './RadialProgress';

function getComponent(props = {}) {
  return renderer.create(
    <RadialProgress { ...props } />
  );
}

describe('RadialProgress', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
