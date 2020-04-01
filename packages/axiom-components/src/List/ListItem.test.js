import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

const getComponent = (props = {}) =>
  renderer.create(<ListItem {...props}>Lorem Ipsum</ListItem>);

describe('ListItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
