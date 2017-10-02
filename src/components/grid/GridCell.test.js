import React from 'react';
import renderer from 'react-test-renderer';
import GridCell from './GridCell';

const getComponent = (props = {}) =>
  renderer.create(
    <GridCell { ...props }>
      <div></div>
    </GridCell>
  );

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

  describe('renders with verticalAlign', () => {
    ['start', 'middle', 'end'].forEach((verticalAlign) => {
      it(verticalAlign, () => {
        const component = getComponent({ verticalAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });


  describe('renders with sub grid', () => {
    [true, false].forEach((subGrid) => {
      it(subGrid, () => {
        const component = getComponent({ subGrid });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
