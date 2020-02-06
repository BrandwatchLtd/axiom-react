import React from 'react';
import renderer from 'react-test-renderer';
import Tool from './Tool';

const getComponent = (props = {}) =>
  renderer.create(
    <Tool { ...props }>Test</Tool>
  );

describe('Toolbar', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
