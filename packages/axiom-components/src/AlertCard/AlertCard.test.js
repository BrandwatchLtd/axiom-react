import React from 'react';
import renderer from 'react-test-renderer';
import AlertCard from './AlertCard';

const getComponent = (props = {}) =>
  renderer.create(<AlertCard {...props}>Lorem</AlertCard>);

describe('AlertCard', () => {
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

  describe('renders with shade', () => {
    ['shade-1', 'shade-2', 'shade-3', 'shade-4'].forEach(shade => {
      it(shade, () => {
        const component = getComponent({ shade });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach(size => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with type', () => {
    ['success', 'warning', 'error', 'info'].forEach(type => {
      it(type, () => {
        const component = getComponent({ type });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
