import React from 'react';
import renderer from 'react-test-renderer';
import { TableCell } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <TableCell>
      123456
    </TableCell>
  );
}

describe('TableBody', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
