import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

const getComponent = (props = {}) =>
  renderer.create(
    <RadioButtonGroup { ...props }>
      <RadioButton>Lorem ipsum</RadioButton>
    </RadioButtonGroup>
  );

describe('RadioButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
