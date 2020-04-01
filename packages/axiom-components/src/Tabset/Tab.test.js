import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

const getComponent = (props = {}) => renderer.create(<Tab {...props} />);

describe('Tab', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with active', () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with title', () => {
    it('string', () => {
      const component = getComponent({ title: 'Lorem ipsum' });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('number', () => {
      const component = getComponent({ title: 1000 });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('react element', () => {
      const component = getComponent({ title: <span>Lorem Ipsum</span> });
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
