import React from 'react';
import renderer from 'react-test-renderer';
import { colors } from '@brandwatch/axiom-materials';
import Word from './Word';

const getComponent = (props = {}) =>
  renderer.create(
    <Word
        font="Roboto, Helvetica, Arial, sans-serif"
        x={ 0 }
        y={ 0 }
        { ...props } />
  );

describe('Word', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with hidden', () => {
    const component = getComponent({ hidden: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with hidden and disabled', () => {
    const component = getComponent({
      disabled: true,
      hidden: true,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
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
});
