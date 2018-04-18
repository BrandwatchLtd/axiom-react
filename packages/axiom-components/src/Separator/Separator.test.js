import React from 'react';
import renderer from 'react-test-renderer';
import Separator from './Separator';

const getComponent = (props = {}) =>
  renderer.create(
    <Separator { ...props } />
  );

describe('Separator', () => {
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

  describe('renders with direction', () => {
    ['horizontal', 'vertical'].forEach((direction) => {
      it(direction, () => {
        const component = getComponent({ direction });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
