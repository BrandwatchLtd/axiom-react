import React from 'react';
import renderer from 'react-test-renderer';
import TableCell from './TableCell';

const getComponent = (props = {}) =>
  renderer.create(
    <TableCell { ...props }>
      123456
    </TableCell>
  );

describe('TableBody', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with grow', () => {
    const component = getComponent({ grow: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
