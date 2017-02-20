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

  it('renders with size small', () => {
    const component = getComponent({ size: 'small' });
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
