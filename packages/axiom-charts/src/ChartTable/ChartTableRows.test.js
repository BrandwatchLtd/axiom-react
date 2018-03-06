import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableRow from './ChartTableRow';
import ChartTableRows from './ChartTableRows';

const getComponent = (props = {}) => {
  const defaults = {
    labelColumnWidth: '11rem',
    xAxisLabels: [ '0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
  };

  return renderer.create(
    <ChartTableRows { ...Object.assign({}, defaults, props) } >
      <ChartTableRow>Lorem</ChartTableRow>
      <ChartTableRow>Lorem</ChartTableRow>
      <ChartTableRow>Lorem</ChartTableRow>
    </ChartTableRows>
  );
};

describe('ChartTableRows', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with collapsedVisibleRowCount more than children count', () => {
    const component = getComponent({ collapsedVisibleRowCount: 4 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with expandButtonSuffix', () => {
    const component = getComponent({ expandButtonSuffix: 'Lorem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with xAxisLabels', () => {
    const component = getComponent({ xAxisLabels: ['0%', '50%', '100%'] });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
