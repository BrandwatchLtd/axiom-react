import React from 'react';
import renderer from 'react-test-renderer';
import Context from './Context';

const getComponent = (props = {}) =>
  renderer.create(
    <Context { ...props }>
      Lorem ipsum
    </Context>
  );

describe('Context', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with arrowRef', () => {
    const component = getComponent({ arrowRef: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders custom maxHeight', () => {
    const component = getComponent({ maxHeight: '20rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders custom width', () => {
    const component = getComponent({ width: '20rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with position', () => {
    ['top', 'bottom', 'right', 'left'].forEach((position) => {
      it(position, () => {
        const component = getComponent({ position });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with theme', () => {
    ['dark', 'light'].forEach((theme) => {
      it(theme, () => {
        const component = getComponent({ theme });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
