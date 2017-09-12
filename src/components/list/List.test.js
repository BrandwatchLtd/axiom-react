import React from 'react';
import renderer from 'react-test-renderer';
import { List, ListItem } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <List { ...props }>
      <ListItem>Lorem Ipsum</ListItem>
    </List>
  );

describe('List', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with style', () => {
    ['disc', 'inline', 'none', 'ordered'].forEach((style) => {
      it(style, () => {
        const component = getComponent({ style });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
