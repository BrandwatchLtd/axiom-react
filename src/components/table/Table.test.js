import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';
import TableBody from './TableBody';

const getComponent = (props = {}) =>
  renderer.create(
    <Table { ...props }>
      <TableBody />
    </Table>
  );

describe('Table', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
