import React from 'react';
import renderer from 'react-test-renderer';
import ChartKey from './ChartKey';
import ChartKeyItem from './ChartKeyItem';

const getComponent = () =>
  renderer.create(
    <ChartKey>
      <ChartKeyItem label="Ipsum">Lorem</ChartKeyItem>
    </ChartKey>
  );

describe('ChartKey', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
