import React from 'react';
import renderer from 'react-test-renderer';
import Progress from './Progress';

const getComponent = (props = {}) =>
  renderer.create(
    <Progress { ...props } />
  );

describe('Progress', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an error indicator', () => {
    const component = getComponent({ error: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a success indicator', () => {
    const component = getComponent({ complete: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a finite progress indicator', () => {
    const component = getComponent({ percent: 50 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
