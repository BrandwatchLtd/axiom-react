import React from 'react';
import Grid from './Grid';
import renderer from 'react-test-renderer';

import { breakpointIds } from '../../design-patterns/layout/_vars';
import { gridGutters } from './_vars';

function getComponent(props = {}) {
  return renderer.create(
    <Grid { ...props }>
      <div></div>
    </Grid>
  );
}

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('Grid', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  describe('properties', () => {
    it('renders with vGutters property set to false', () => {
      matchSnapshot({ vGutters: false });
    });

    it('renders with hGutters property set to false', () => {
      matchSnapshot({ hGutters: false });
    });

    describe('fit', () => {
      it('renders with value true', () => {
        matchSnapshot({ fit: true });
      });

      breakpointIds.forEach(breakpoint => {
        it(`renders with breakpoint ${breakpoint}`, () => {
          matchSnapshot({ fit: breakpoint });
        });
      });
    });

    describe('gutters', () => {
      it('renders with value false', () => {
        matchSnapshot({ gutters: false });
      });

      const gridGutterIds = gridGutters.map(({ id }) => id);

      gridGutterIds.forEach(gutter => {
        it(`renders with gutter ${gutter}`, () => {
          matchSnapshot({ gutters: gutter });
        });
      });
    });
  });
});
