import React from 'react';
import renderer from 'react-test-renderer';
import { CardList, CardListItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <CardList { ...props }>
      <CardListItem>Lorem Ipsum</CardListItem>
    </CardList>
  );
}

describe('CardList', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with separators', () => {
    const component = getComponent({ separators: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
