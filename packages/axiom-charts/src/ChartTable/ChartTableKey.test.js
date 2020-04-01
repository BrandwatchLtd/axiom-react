import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableKey from './ChartTableKey';

const getComponent = (props = {}) =>
  renderer.create(<ChartTableKey {...props}>Lorem</ChartTableKey>);

describe('ChartTableKey', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
