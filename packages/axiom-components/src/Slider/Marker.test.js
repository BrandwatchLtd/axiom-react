import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Marker from './Marker';

const render = (props = {}) => {
  const newProps = { valueAsPercentage: 0.1, value: 3.03, onChange: jest.fn(), ...props };
  return shallow(
    <Marker { ...newProps }/>
  );
};

describe('Marker', () => {
  it('renders with defaultProps', () => {
    expect(toJson(render())).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const props = { disabled: true, isVisible: false, valueFormatter: x=>Math.floor(x) };
    expect(toJson(render(props))).toMatchSnapshot();
  });
});
