import React from 'react';
import renderer from 'react-test-renderer';
import { CardList, Card } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <CardList { ...props }>
      <Card>Lorem Ipsum</Card>
    </CardList>
  );
}

describe('CardList', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size medium', () => {
    const component = getComponent({ size: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with size large', () => {
    const component = getComponent({ size: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with compact', () => {
    const component = getComponent({ compact: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with separators', () => {
    const component = getComponent({ separators: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
