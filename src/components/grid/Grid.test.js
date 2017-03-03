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

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('Grid', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders with vGutters false', () => {
    matchSnapshot({ vGutters: false });
  });

  it('renders with hGutters false', () => {
    matchSnapshot({ hGutters: false });
  });

  it('renders with responsive false', () => {
    matchSnapshot({ responsive: false });
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

  describe('fill', () => {
    it('renders with value true', () => {
      matchSnapshot({ fill: true });
    });

    it('renders with value small', () => {
      matchSnapshot({ fill: 'small' });
    });

    it('renders with value medium', () => {
      matchSnapshot({ fill: 'medium' });
    });

    it('renders with value large', () => {
      matchSnapshot({ fill: 'large' });
    });
  });

  describe('full', () => {
    it('renders with value true', () => {
      matchSnapshot({ full: true });
    });

    it('renders with value small', () => {
      matchSnapshot({ full: 'small' });
    });

    it('renders with value medium', () => {
      matchSnapshot({ full: 'medium' });
    });

    it('renders with value large', () => {
      matchSnapshot({ full: 'large' });
    });
  });

  describe('shrink', () => {
    it('renders with value true', () => {
      matchSnapshot({ shrink: true });
    });

    it('renders with value small', () => {
      matchSnapshot({ shrink: 'small' });
    });

    it('renders with value medium', () => {
      matchSnapshot({ shrink: 'medium' });
    });

    it('renders with value large', () => {
      matchSnapshot({ shrink: 'large' });
    });
  });

  describe('gutters', () => {
    it('renders with value false', () => {
      matchSnapshot({ gutters: false });
    });

    it('renders with value tiny', () => {
      matchSnapshot({ gutters: 'tiny' });
    });

    it('renders with value small', () => {
      matchSnapshot({ gutters: 'small' });
    });

    it('renders with value medium', () => {
      matchSnapshot({ gutters: 'medium' });
    });

    it('renders with value large', () => {
      matchSnapshot({ gutters: 'large' });
    });
  });

  describe('vAlign', () => {
    it('renders with value small', () => {
      matchSnapshot({ vAlign: 'top' });
    });

    it('renders with value medium', () => {
      matchSnapshot({ vAlign: 'middle' });
    });

    it('renders with value large', () => {
      matchSnapshot({ vAlign: 'bottom' });
    });
  });
});
