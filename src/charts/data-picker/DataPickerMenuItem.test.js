import React from 'react';
import renderer from 'react-test-renderer';
import { DataPickerMenuItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPickerMenuItem { ...props }>
      Lorem Ipsum
    </DataPickerMenuItem>
  );
}

describe('DataPickerMenuItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


