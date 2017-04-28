import React from 'react';
import renderer from 'react-test-renderer';
import { Bar } from 'bw-axiom';

function getComponent(props = { percentage: 43 }) {
  return renderer.create(
    <Bar { ...props } />
  );
}

describe('Bar', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
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

  describe('renders with percentage', () => {
    [
      '1',
      '100',
    ].forEach((percentage) => {
      it(percentage, () => {
        const component = getComponent({ percentage });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
