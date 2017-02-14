import React from 'react';
import renderer from 'react-test-renderer';
import { ImageCircle } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ImageCircle { ...props } size="3rem" />
  );
}

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('ImageCircle', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders with border small', () => {
    matchSnapshot({ border: 'small' });
  });

  it('renders with border large', () => {
    matchSnapshot({ border: 'large' });
  });

  it('renders with overlay icon', () => {
    matchSnapshot({
      overlayIconName: 'twitter',
      overlayIconSize: '2rem',
    });
  });
});
