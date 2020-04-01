import React from 'react';
import renderer from 'react-test-renderer';
import RadialProgress from './RadialProgress';

const getComponent = (props = {}) =>
  renderer.create(
    <RadialProgress className="lorem" diameter={75} size="small" {...props}>
      <svg />
    </RadialProgress>
  );

describe('RadialProgress', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach(size => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
