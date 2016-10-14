import React from 'react';
import Avatar from './Avatar';
import renderer from 'react-test-renderer';

test('Avatar', () => {
  const component = renderer.create(
    <Avatar size="small" src="/image/path" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
