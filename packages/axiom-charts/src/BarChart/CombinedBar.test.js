import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CombinedBar from './CombinedBar';

function getComponent(newProps = {}) {
  const props = {
    DropdownContext: jest.fn(),
    TooltipContext: jest.fn(),
    onClick: jest.fn(),
    onDropdownClose: jest.fn(),
    onDropdownOpen: jest.fn(),
    data: [],
    color: 'critical-mass',
    label: 'Possitve',
    value: 4321,
    ...newProps,
  };

  return shallow(
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

    expect(toJSON(component)).toMatchSnapshot();
  });

  it('renders an additional striped bar when benchmark value is grather than current value', () => {
    const component = getComponent({
      benchmarkValue: 50,
      percent: 10,
    });

    expect(toJSON(component)).toMatchSnapshot();
  });
});
