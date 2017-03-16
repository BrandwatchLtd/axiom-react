import React from 'react';
import renderer from 'react-test-renderer';
import { Table, TableBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Table { ...props }>
      <TableBody />
    </Table>
  );
}

describe('Table', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with compact', () => {
    const component = getComponent({ compact: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with borders disabled', () => {
    const component = getComponent({ borders: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with hGutters="small"', () => {
    const component = getComponent({ hGutters: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
