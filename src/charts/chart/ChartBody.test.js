import React from 'react';
import renderer from 'react-test-renderer';
import { ChartBody } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ChartBody { ...props }>Lorem Ipsum</ChartBody>
  );
}

describe('ChartBody', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with horizontalAlign', () => {
    ['start', 'middle', 'end'].forEach((horizontalAlign) => {
      it(horizontalAlign, () => {
        const component = getComponent({ horizontalAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders with verticalAlign', () => {
    ['start', 'middle', 'end', 'around', 'between'].forEach((verticalAlign) => {
      it(verticalAlign, () => {
        const component = getComponent({ verticalAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
