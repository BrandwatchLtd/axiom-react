import React from 'react';
import renderer from 'react-test-renderer';
import { colors } from '@brandwatch/axiom-materials';
import Bar from './Bar';
import Bars from './Bars';

const getComponent = (props = {}, direction = 'up') =>
  renderer.create(
    <Bars direction={ direction }>
      <Bar color="tiny-clanger" percent={ 50 } { ...props } />
    </Bars>
  );

describe('Bar', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    Object.keys(colors.productColorNames).forEach((color) => {
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

  it('renders with labelStrong', () => {
    const component = getComponent({ labelStrong: true, showLabel: true });
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
