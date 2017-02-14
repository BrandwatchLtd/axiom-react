import React from 'react';
import renderer from 'react-test-renderer';
import { List, ListItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <List { ...props }>
      <ListItem>Lorem Ipsum</ListItem>
    </List>
  );
}

describe('List', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with inline', () => {
    const component = getComponent({ inline: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with ordered', () => {
    const component = getComponent({ ordered: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
