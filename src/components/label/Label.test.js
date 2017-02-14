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

  it('renders always full width', () => {
    const component = getComponent({ full: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at small breakpoint', () => {
    const component = getComponent({ full: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at medium breakpoint', () => {
    const component = getComponent({ full: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders always full width at large breakpoint', () => {
    const component = getComponent({ full: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders small size', () => {
    const component = getComponent({ size: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders medium size', () => {
    const component = getComponent({ size: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors white', () => {
    const component = getComponent({ color: 'white' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors success', () => {
    const component = getComponent({ color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders colors error', () => {
    const component = getComponent({ color: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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
