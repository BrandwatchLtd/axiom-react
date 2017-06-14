import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButton from './PaginationButton';

function getComponent(props = {}) {
  return renderer.create(
    <PaginationButton { ...props } />
  );
}

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

  it('renders with circular', () => {
    const component = getComponent({ circular: 'small', page: 100 });
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
