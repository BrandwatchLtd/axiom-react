import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import ButtonIcon from './ButtonIcon';

const getComponent = (props = {}, children = 'Lorem Ipsum') =>
  renderer.create(
    <Button { ...props }>{ children }</Button>
  );

describe('Button', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with active', () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    ['accent', 'negative', 'positive'].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with full', () => {
    [true, 'small', 'medium', 'large'].forEach((full) => {
      it(String(full), () => {
        const component = getComponent({ full });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with style', () => {
    ['primary', 'secondary', 'tertiary', 'quaternary'].forEach((style) => {
      it(style, () => {
        const component = getComponent({ style });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with shape', () =>
    ['circle', 'rectangle', 'stadium'].forEach((shape) =>
      describe('with size', () =>
        ['small', 'medium', 'large', 'huge'].forEach((size) =>
          it(`${shape} with ${size}`, () => {
            const component = getComponent({ shape, size });
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          })
        )
      )
    )
  );

  describe('with ButtonIcon', () => {
    it('adds space to start if first child', () => {
      const component = getComponent({}, [
        <ButtonIcon key="ButtonIcon" name="twitter" />,
        'Lorem ipsum',
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space to end if last child', () => {
      const component = getComponent({}, [
        'Lorem ipsum',
        <ButtonIcon key="ButtonIcon" name="twitter" />,
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('adds space all around if middle children', () => {
      const component = getComponent({}, [
        'Lorem ipsum',
        <ButtonIcon key="ButtonIcon" name="twitter" />,
        'Lorem ipsum',
      ]);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
