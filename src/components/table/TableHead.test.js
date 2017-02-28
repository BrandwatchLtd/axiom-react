import React from 'react';
import renderer from 'react-test-renderer';
import { TableHead, TableRow } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <TableHead>
      <TableRow />
    </TableHead>
  );
}

describe('TableHead', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
