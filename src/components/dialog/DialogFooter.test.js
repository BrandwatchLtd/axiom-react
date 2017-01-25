import React from 'react';
import renderer from 'react-test-renderer';
import { DialogFooter } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <DialogFooter { ...props }>
      Lorem ipsum
    </DialogFooter>
  );
}

describe('DialogFooter', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
