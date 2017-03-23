import React from 'react';
import renderer from 'react-test-renderer';
import { Label, LabelIcon } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Label children="Lorem Ipsum" { ...props } />
  );
}

describe('Label', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    ['white', 'success', 'error'].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
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

  describe('render with size', () => {
    ['small', 'medium'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('with LabelIcon', () => {
    it('adds space to start if first child', () => {
      const component = getComponent({
        children: [
          <LabelIcon name="twitter" />,
          'Lorem ipsum',
        ],
      });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space to end if last child', () => {
      const component = getComponent({
        children: [
          'Lorem ipsum',
          <LabelIcon name="twitter" />,
        ],
      });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space all around if middle children', () => {
      const component = getComponent({
        children: [
          'Lorem ipsum',
          <LabelIcon name="twitter" />,
          'Lorem ipsum',
        ],
      });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
