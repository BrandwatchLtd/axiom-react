import React from 'react';
import { shallow } from 'enzyme';
import DurationPicker from './DurationPicker';
import toJson from 'enzyme-to-json';

const render = (props = {}, opts = {}) => shallow(<DurationPicker { ...props } />, opts);

describe('DurationPicker', () => {
  describe('Snapshots', () => {
    it('renders with defaultProps', () => {
      expect(toJson(render({}))).toMatchSnapshot();
    });
  });
});
