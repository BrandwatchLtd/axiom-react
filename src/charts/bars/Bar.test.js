import React from 'react';
import renderer from 'react-test-renderer';
import { Bars, Bar } from 'bw-axiom';

function getComponent(props = {}, direction = 'up') {
  return renderer.create(
    <Bars direction={ direction }>
      <Bar color="rose" percent={ 50 } { ...props } />
    </Bars>
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

  describe('renders with minSize', () => {
    ['up', 'down', 'left', 'right'].forEach((direction) => {
      it(direction, () => {
        const component = getComponent({ minSize: '2rem' }, direction);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders with showLabel', () => {
    const component = getComponent({ showLabel: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['up', 'down', 'left', 'right'].forEach((direction) => {
      it(direction, () => {
        const component = getComponent({ size: '2rem' }, direction);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with size and minSize', () => {
    ['up', 'down', 'left', 'right'].forEach((direction) => {
      it(direction, () => {
        const component = getComponent({
          minSize: '2rem',
          size: '2rem',
        }, direction);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
