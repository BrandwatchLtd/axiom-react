import React from 'react';
import renderer from 'react-test-renderer';
import { TextArea } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <TextArea { ...props } />
  );
}

describe('TextArea', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a label', () => {
    const component = getComponent({ label: 'Lorem ipsum' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom height', () => {
    const component = getComponent({ height: 300 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
