import React from 'react';
import renderer from 'react-test-renderer';
import CombinedBar from './CombinedBar';

function getComponent(props = {}) {
  return renderer.create(
    <CombinedBar { ...props }
        color="giant-leap"
        direction="right" />
  );
}

describe('CombinedBar', () => {
  it('renders a single bar when benchmark value is less than current value', () => {
    const component = getComponent({
      benchmarkValue: 10,
      percent: 50,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an additional striped bar when benchmark value is grather than current value', () => {
    const component = getComponent({
      benchmarkValue: 50,
      percent: 10,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
