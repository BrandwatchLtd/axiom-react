import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

const getComponent = (props = {}) =>
  renderer.create(<Avatar src="/image/path" {...props} />);

describe('Avatar', () => {
  it('renders with custom size', () => {
    const component = getComponent({ size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
