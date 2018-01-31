import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalRule from './HorizontalRule';

const getComponent = (props = {}) =>
  renderer.create(
    <HorizontalRule { ...props } />
  );

describe('HorizontalRule', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with style', () => {
    ['solid', 'dotted'].forEach((borderStyle) => {
      it(borderStyle, () => {
        const component = getComponent({ borderStyle });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
