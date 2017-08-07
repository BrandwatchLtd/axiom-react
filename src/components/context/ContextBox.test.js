import React from 'react';
import renderer from 'react-test-renderer';
import { ContextBox } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextBox { ...props }>
      Lorem ipsum
    </ContextBox>
  );
}

describe('ContextBox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with padding', () => {
    ['none', 'small', 'large'].forEach((padding) => {
      it(padding, () => {
        const component = getComponent({ padding });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with height', () => {
    it('inserts an inline height style attribute', () => {
      const component = getComponent({ height: '5rem' });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders with maxHeight', () => {
    it('inserts an inline maxHeight style attribute', () => {
      const component = getComponent({ maxHeight: '5rem' });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders with hasFullSeparator', () => {
    it('renders with the full-separator element modifier', () => {
      const component = getComponent({ hasFullSeparator: true });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
