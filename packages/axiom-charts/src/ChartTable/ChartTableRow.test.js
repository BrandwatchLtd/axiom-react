import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableRow from './ChartTableRow';

const getComponent = (props = {}) =>
  renderer.create(
    <ChartTableRow { ...props }>
      Lorem Ipsum
    </ChartTableRow>
  );

describe('ChartTableRow', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
