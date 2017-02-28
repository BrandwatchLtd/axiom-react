import React from 'react';
import renderer from 'react-test-renderer';
import { TableRow, TableCell } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <TableRow>
      <TableCell>
        123456
      </TableCell>
    </TableRow>
  );
}

describe('TableHead', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
