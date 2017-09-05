import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <Card { ...props }>
      Lorem Ipsum
    </Card>
  );

describe('Card', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with active', () => {
    const component = getComponent({ active: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick styles', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
