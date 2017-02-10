import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressFinite } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ProgressFinite { ...props } />
  );
}

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('ProgressFinite', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders with percent props', () => {
    matchSnapshot({ percent: 50 });
  });
});
