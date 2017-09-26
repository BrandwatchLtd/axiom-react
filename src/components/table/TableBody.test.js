import React from 'react';
import renderer from 'react-test-renderer';
import TableBody from './TableBody';
import TableRow from './TableRow';

const getComponent = () =>
  renderer.create(
    <TableBody>
      <TableRow />
    </TableBody>
  );

describe('TableBody', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
