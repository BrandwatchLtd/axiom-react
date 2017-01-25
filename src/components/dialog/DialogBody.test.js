import React from 'react';
import renderer from 'react-test-renderer';
import { DialogBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DialogBody { ...props }>
      Lorem ipsum
    </DialogBody>
  );
}

describe('DialogBody', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
