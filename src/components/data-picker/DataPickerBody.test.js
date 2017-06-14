import React from 'react';
import renderer from 'react-test-renderer';
import { DataPickerBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DataPickerBody { ...props }>
      Lorem Ipsum
    </DataPickerBody>
  );
}

describe('DataPickerBody', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


