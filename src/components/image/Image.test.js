import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

const getComponent = (props = {}) =>
  renderer.create(
    <Image src="/image.png" { ...props } />
  );

describe('Image', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with extra props', () => {
    const component = getComponent({ title: 'Lorem', alt: 'Lorem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
