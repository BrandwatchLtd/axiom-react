import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Alert children="Lorem ipsum" { ...props } />
  );
}

describe('Alert', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color success', () => {
    const component = getComponent({ color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color warning', () => {
    const component = getComponent({ color: 'warning' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color error', () => {
    const component = getComponent({ color: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color info', () => {
    const component = getComponent({ color: 'info' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onRemoveClick', () => {
    const component = getComponent({ onRemoveClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with withIcon', () => {
    const component = getComponent({ withIcon: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
