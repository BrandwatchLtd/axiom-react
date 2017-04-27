import React from 'react';
import renderer from 'react-test-renderer';
import { DotPlot, Dot } from 'bw-axiom';

function getComponent(props = {}, children = [
  <Dot color="blue" percent={ 10 } />,
  <Dot color="pink" percent={ 20 } />,
]) {
  return renderer.create(
    <DotPlot { ...props }>
      { children }
    </DotPlot>
  );
}

describe('ChartTableRows', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with unsorted children', () => {
    const component = getComponent({}, [
      <Dot color="pink" percent={ 20 } />,
      <Dot color="blue" percent={ 10 } />,
    ]);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with height', () => {
    const component = getComponent({ height: '1rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
