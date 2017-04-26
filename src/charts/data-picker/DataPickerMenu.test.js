import React from 'react';
import renderer from 'react-test-renderer';
import { DataPickerMenu } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPickerMenu { ...props }>
      Lorem Ipsum
    </DataPickerMenu>
  );
}

describe('DataPickerMenu', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with position', () => {
    const component = getComponent({ position: 'bottom' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

