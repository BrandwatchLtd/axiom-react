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

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('GridCell', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders with customWidth', () => {
    matchSnapshot({ width: 67 });
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
