import React from 'react';
import renderer from 'react-test-renderer';
import ImageCircle from './ImageCircle';

const getComponent = (props = {}) =>
  renderer.create(
    <ImageCircle { ...props } size="3rem" src="/lorem.jpg" />
  );

describe('ImageCircle', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with overlay icon', () => {
    const component = getComponent({
      overlayIconName: 'twitter',
      overlayIconSize: '2rem',
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with border', () => {
    ['small', 'large'].forEach((border) => {
      it(border, () => {
        const component = getComponent({ border });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
