import React from 'react';
import renderer from 'react-test-renderer';
import CardImages from './CardImages';

const getComponent = (props = {}) =>
  renderer.create(
    <CardImages { ...props } />
  );

describe('CardImages', () => {
  it('renders with 1 src', () => {
    const component = getComponent({
      srcs: ['image.png'],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with 2 src', () => {
    const component = getComponent({
      srcs: ['image.png', 'image.png'],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with 3 src', () => {
    const component = getComponent({
      srcs: ['image.png', 'image.png', 'image.png'],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with 4 src', () => {
    const component = getComponent({
      srcs: ['image.png', 'image.png', 'image.png', 'image.png'],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
