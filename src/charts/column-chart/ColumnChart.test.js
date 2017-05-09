import React from 'react';
import renderer from 'react-test-renderer';
import { ColumnChart } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ColumnChart height="10rem" { ...props }>
      Lorem
    </ColumnChart>
  );
}

describe('ColumnChart', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
