import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from './CheckBox';
import CheckBoxGroup from './CheckBoxGroup';

const getComponent = (props = {}) =>
  renderer.create(
    <CheckBoxGroup { ...props }>
      <CheckBox>Lorem ipsum</CheckBox>
    </CheckBoxGroup>
  );

describe('CheckBox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
