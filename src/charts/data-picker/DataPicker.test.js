import React from 'react';
import renderer from 'react-test-renderer';
import { DataPicker } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPicker { ...props }>
      Lorem Ipsum
    </DataPicker>
  );
}

describe('DataPicker', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

