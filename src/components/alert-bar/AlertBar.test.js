import React from 'react';
import renderer from 'react-test-renderer';
import AlertBar from './AlertBar';

const getComponent = (props = {}) =>
  renderer.create(
    <AlertBar { ...props }>Lorem</AlertBar>
  );

describe('AlertBar', () => {
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

  describe('renders with size', () => {
    ['small', 'medium'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with type', () => {
    ['success', 'warning', 'error', 'info'].forEach((type) => {
      it(type, () => {
        const component = getComponent({ type });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

});
