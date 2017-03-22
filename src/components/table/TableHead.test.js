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

  it('renders with rowPadding none', () => {
    const component = getComponent({ rowPadding: 'none' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with rowPadding small', () => {
    const component = getComponent({ rowPadding: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with rowPadding medium', () => {
    const component = getComponent({ rowPadding: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with rowPadding large', () => {
    const component = getComponent({ rowPadding: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
