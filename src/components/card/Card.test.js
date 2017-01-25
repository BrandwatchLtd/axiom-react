import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Card { ...props }>
      Lorem Ipsum
    </Card>
  );
}

describe('Card', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders compact', () => {
    const component = getComponent({ compact: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
