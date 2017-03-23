import React from 'react';
import renderer from 'react-test-renderer';
import { Button, ButtonIcon } from 'bw-axiom';

function getComponent(props = {}, children = 'Lorem Ipsum') {
  return renderer.create(
    <Button { ...props }>{ children }</Button>
  );
}

describe('Button', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with full', () => {
    [true, 'small', 'medium', 'large'].forEach((full) => {
      it(full, () => {
        const component = getComponent({ full });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with style', () => {
    ['primary', 'secondary', 'tertiary'].forEach((style) => {
      it(style, () => {
        const component = getComponent({ style });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with circular', () => {
    ['small', 'medium', 'large', 'huge'].forEach((circular) => {
      it(circular, () => {
        const component = getComponent({ circular });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('with ButtonIcon', () => {
    it('adds space to start if first child', () => {
      const component = getComponent({}, [
        <ButtonIcon name="twitter" />,
        'Lorem ipsum',
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space to end if last child', () => {
      const component = getComponent({}, [
        'Lorem ipsum',
        <ButtonIcon name="twitter" />,
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space all around if middle children', () => {
      const component = getComponent({}, [
        'Lorem ipsum',
        <ButtonIcon name="twitter" />,
        'Lorem ipsum',
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
