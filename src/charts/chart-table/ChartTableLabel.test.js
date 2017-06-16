import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableLabel from './ChartTableLabel';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableLabel { ...props } width="11rem">
      Lorem Ipsum
    </ChartTableLabel>
  );
}

describe('ChartTableLabel', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
