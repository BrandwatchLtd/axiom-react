import React from 'react';
import renderer from 'react-test-renderer';
import TableCell from './TableCell';
import TableRow from './TableRow';

const getComponent = () =>
  renderer.create(
    <TableRow>
      <TableCell>
        123456
      </TableCell>
    </TableRow>
  );

describe('TableHead', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
