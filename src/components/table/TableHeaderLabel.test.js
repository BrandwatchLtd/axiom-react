import React from 'react';
import renderer from 'react-test-renderer';
import TableHeaderLabel from './TableHeaderLabel';

const getComponent = props => renderer.create(
  <TableHeaderLabel { ...props }>Test</TableHeaderLabel>
);

describe('TableHeaderLabel', () => {
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

  it('renders with isSelected', () => {
    const component = getComponent({ isSelected: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with shrink', () => {
    const component = getComponent({ shrink: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with textAlign', () => {
    const component = getComponent({ textAlign: 'right' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
