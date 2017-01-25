import React from 'react';
import renderer from 'react-test-renderer';
import { CardListItem } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <CardListItem { ...props }>
      Lorem Ipsum
    </CardListItem>
  );
}

describe('CardListItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders active', () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders clickable', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
