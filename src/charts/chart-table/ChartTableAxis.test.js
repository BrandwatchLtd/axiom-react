import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableAxis from './ChartTableAxis';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableAxis { ...props }
        title="Lorem Ipsum" />
  );
}

describe('ChartTableAxis', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with labels', () => {
    const component = getComponent({ labels: ['1', '2'] });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
