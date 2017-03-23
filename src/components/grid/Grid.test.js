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

  describe('renders with hAlign', () => {
    ['start', 'middle', 'end', 'around', 'between'].forEach((hAlign) => {
      it(hAlign, () => {
        const component = getComponent({ hAlign });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with hGutters', () => {
    [false, 'tiny', 'small', 'medium', 'large'].forEach((hGutters) => {
      it(hGutters, () => {
        const component = getComponent({ hGutters });
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

  describe('renders with vGutters', () => {
    [false, 'tiny', 'small', 'medium', 'large'].forEach((vGutters) => {
      it(vGutters, () => {
        const component = getComponent({ vGutters });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
