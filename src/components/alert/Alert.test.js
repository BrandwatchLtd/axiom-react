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

  it('renders with onRemoveClick', () => {
    const component = getComponent({ onRemoveClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    ['success', 'warning', 'error', 'info'].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
