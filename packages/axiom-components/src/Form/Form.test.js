import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';

const getComponent = (props = {}) =>
  renderer.create(<Form {...props}>Lorem ipsum</Form>);

describe('Form', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
