import React from 'react';
import renderer from 'react-test-renderer';
import { DataPickerHeader } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPickerHeader { ...props } />
  );
}

describe('DataPickerHeader', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = getComponent({ color: 'blue' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with headerText', () => {
    const component = getComponent({ headerText: 'Test' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


