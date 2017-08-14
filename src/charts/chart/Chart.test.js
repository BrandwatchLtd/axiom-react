import React from 'react';
import renderer from 'react-test-renderer';
import { Chart } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Chart { ...props } />
  );
}

describe('Chart', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with minimumHeight', () => {
    const component = getComponent({ minimumHeight: '10rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
