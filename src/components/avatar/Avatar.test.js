import React from 'react';
import Avatar from './Avatar';
import renderer from 'react-test-renderer';

import { avatarSizes } from '../avatar/_vars';

function getComponent(props = {}) {
  return renderer.create(
    <Avatar src="/image/path" { ...props } />
  );
}

describe('Avatar', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('avatarSizes', () => {
    const avatarSizeIds = avatarSizes.map(({ id }) => id);

    avatarSizeIds.forEach(size => {
      it(`renders with ${size}`, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
