import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressInfinite } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ProgressInfinite { ...props } />
  );
}

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('ProgressInfinite', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders with color white', () => {
    matchSnapshot({ color: 'white' });
  });

  it('renders with color subtle', () => {
    matchSnapshot({ color: 'subtle' });
  });
});
