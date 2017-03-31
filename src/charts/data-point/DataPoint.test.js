import React from 'react';
import renderer from 'react-test-renderer';
import { DataPoint } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPoint { ...props } />
  );
}

describe('DataPoint', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with radius', () => {
    const component = getComponent({ radius: 10 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with x', () => {
    const component = getComponent({ x: 10 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with y', () => {
    const component = getComponent({ y: 10 });
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
