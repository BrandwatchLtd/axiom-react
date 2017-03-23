import React from 'react';
import renderer from 'react-test-renderer';
import { Badge } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Badge { ...props }>
      Lorem Ipsum
    </Badge>
  );
}

describe('Badge', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity minimum 0', () => {
    const component = getComponent({ opacity: -1 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity maximum 1', () => {
    const component = getComponent({ opacity: 2 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity', () => {
    const component = getComponent({ opacity: 0.5 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    [
      'faded',
      'highlight',
      'success',
      'error',
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ].forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with full', () => {
    [true, 'small', 'medium', 'large'].forEach((full) => {
      it(full, () => {
        const component = getComponent({ full });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
