import React from 'react';
import renderer from 'react-test-renderer';
import Candytar from './Candytar';
import productColors from '../../materials/colors/productColors';

const getComponent = (props = {}) =>
  renderer.create(
    <Candytar size="2rem" src="/image/path" { ...props } />
  );

describe('Candytar', () => {
  it('renders with custom size', () => {
    const component = getComponent({ color: 'tiny-clanger', size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    productColors.forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
