import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButton from './PaginationButton';

const getComponent = (props = {}) =>
  renderer.create(
    <PaginationButton { ...props }>1</PaginationButton>
  );

describe('Composite: PaginationButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with page in single digits', () => {
    const component = getComponent({ page: 1 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with page in double digits', () => {
    const component = getComponent({ page: 99 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with page in treble digits', () => {
    const component = getComponent({ page: 100 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with shape', () => {
    const component = getComponent({ shape: 'circle', page: 100 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with active state', () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
