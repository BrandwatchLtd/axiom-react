import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableLabel from './ChartTableLabel';

const getComponent = (props = {}) =>
  renderer.create(
    <ChartTableLabel { ...props } width="11rem">
      Lorem Ipsum
    </ChartTableLabel>
  );

describe('ChartTableLabel', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onToggleRowVisibility and disabled', () => {
    const component = getComponent({
      disabled: true,
      onToggleRowVisibility: () => {},
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
