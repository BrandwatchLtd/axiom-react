import React from 'react';
import renderer from 'react-test-renderer';
import { MirroredColumnChart } from 'bw-axiom';

function getComponent() {
  return renderer.create(
    <MirroredColumnChart
        chartKey={ [{}] }
        data={ [{ label: 'test', values: [] }] }
        height="20rem"
        labelColumnWidth="10rem"
        reflectionData={ [{ label: 'test', values: [] }] }/>
  );
}

describe('MirroredColumnChart', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
