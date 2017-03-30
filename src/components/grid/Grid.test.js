import React from 'react';
import renderer from 'react-test-renderer';
import { Grid } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Grid { ...props }>
      <div></div>
    </Grid>
  );
}

describe('Grid', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with responsive false', () => {
    const component = getComponent({ responsive: false });
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

  describe('renders with gutters', () => {
    [false, 'tiny', 'small', 'medium', 'large'].forEach((gutters) => {
      it(gutters, () => {
        const component = getComponent({ gutters });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with horizontalAlign', () => {
    ['start', 'middle', 'end', 'around', 'between'].forEach((horizontalAlign) => {
      it(horizontalAlign, () => {
        const component = getComponent({ horizontalAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with horizontalGutters', () => {
    [false, 'tiny', 'small', 'medium', 'large'].forEach((horizontalGutters) => {
      it(horizontalGutters, () => {
        const component = getComponent({ horizontalGutters });
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

  describe('renders with verticalGutters', () => {
    [false, 'tiny', 'small', 'medium', 'large'].forEach((verticalGutters) => {
      it(verticalGutters, () => {
        const component = getComponent({ verticalGutters });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
