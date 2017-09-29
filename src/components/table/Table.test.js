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

  it('renders with borders disabled', () => {
    const component = getComponent({ borders: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with columnPadding', () => {
    ['none', 'small', 'medium', 'large'].forEach((columnPadding) => {
      it(columnPadding, () => {
        const component = getComponent({ columnPadding });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with rowPadding', () => {
    ['none', 'small', 'medium', 'large'].forEach((rowPadding) => {
      it(rowPadding, () => {
        const component = getComponent({ rowPadding });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
