import React from 'react';
import renderer from 'react-test-renderer';
import ColorPickerOption from './ColorPickerOption';
import { colors } from '@brandwatch/axiom-materials';

const getComponent = (props = {}) =>
  renderer.create(
    <ColorPickerOption { ...props } />
  );

describe('ColorPickerOption', () => {
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

  it('renders with size', () => {
    const component = getComponent({ size: '1rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
