import React from 'react';
import renderer from 'react-test-renderer';
import { GridCell } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <GridCell { ...props }>
      <div></div>
    </GridCell>
  );
}

describe('GridCell', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with fill', () => {
    [true, 'small', 'medium', 'large'].forEach((fill) => {
      it(fill, () => {
        const component = getComponent({ fill });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with fit', () => {
    [true, 'small', 'medium', 'large'].forEach((fit) => {
      it(fit, () => {
        const component = getComponent({ fit });
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

  describe('renders with shrink', () => {
    [true, 'small', 'medium', 'large'].forEach((shrink) => {
      it(shrink, () => {
        const component = getComponent({ shrink });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with vAlign', () => {
    ['start', 'middle', 'end'].forEach((vAlign) => {
      it(vAlign, () => {
        const component = getComponent({ vAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
