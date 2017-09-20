import React from 'react';
import renderer from 'react-test-renderer';
import InlineGroup from './InlineGroup';

const getComponent = (props = {}) =>
  renderer.create(
    <InlineGroup { ...props }>Test</InlineGroup>
  );

describe('InlineGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with className', () => {
    const component = getComponent({ className: 'custom' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
