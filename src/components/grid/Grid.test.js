import React from 'react';
import Grid from './Grid';
import renderer from 'react-test-renderer';

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

      it('renders with value small', () => {
        matchSnapshot({ fit: 'small' });
      });

      it('renders with value medium', () => {
        matchSnapshot({ fit: 'medium' });
      });

      it('renders with value large', () => {
        matchSnapshot({ fit: 'large' });
      });
    });

    describe('gutters', () => {
      it('renders with value false', () => {
        matchSnapshot({ gutters: false });
      });

      it('renders with value small', () => {
        matchSnapshot({ gutters: 'small' });
      });

      it('renders with value large', () => {
        matchSnapshot({ gutters: 'large' });
      });
    });
  });
});
