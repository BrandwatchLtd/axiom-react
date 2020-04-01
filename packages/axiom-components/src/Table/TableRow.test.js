import React from 'react';
import renderer from 'react-test-renderer';
import TableCell from './TableCell';
import TableRow from './TableRow';

const getComponent = (props = {}) =>
  renderer.create(
    <TableRow {...props}>
      <TableCell>123456</TableCell>
    </TableRow>
  );

describe('TableRow', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without borders', () => {
    const component = getComponent({ borderless: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with clickable styling', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
