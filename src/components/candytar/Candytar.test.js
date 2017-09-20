import React from 'react';
import renderer from 'react-test-renderer';
import Candytar from './Candytar';

const getComponent = (props = {}) =>
  renderer.create(
    <Candytar src="/image/path" { ...props } />
  );

describe('Candytar', () => {
  it('renders with custom size', () => {
    const component = getComponent({ color: 'rose', size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    [
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
