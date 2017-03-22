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

  it('renders with borders disabled', () => {
    const component = getComponent({ borders: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with columnPadding none', () => {
    const component = getComponent({ columnPadding: 'none' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with columnPadding small', () => {
    const component = getComponent({ columnPadding: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with columnPadding medium', () => {
    const component = getComponent({ columnPadding: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with columnPadding large', () => {
    const component = getComponent({ columnPadding: 'large' });
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
