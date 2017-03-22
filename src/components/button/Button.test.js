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

  it('renders large size', () => {
    const component = getComponent({ size: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders primary style', () => {
    const component = getComponent({ style: 'primary' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders secondary style', () => {
    const component = getComponent({ style: 'secondary' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders tertiary style', () => {
    const component = getComponent({ style: 'tertiary' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders circular size small', () => {
    const component = getComponent({ circular: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders circular size medium', () => {
    const component = getComponent({ circular: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders circular size large', () => {
    const component = getComponent({ circular: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders circular size huge', () => {
    const component = getComponent({ circular: 'huge' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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
