import React from 'react';
import renderer from 'react-test-renderer';
import { Progress } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Progress { ...props } />
  );
}

function matchSnapshot(props = {}) {
  const component = getComponent(props);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}

describe('Progress', () => {
  it('renders with defaultProps', () => {
    matchSnapshot();
  });

  it('renders an infinite progress indicator', () => {
    matchSnapshot();
  });

  it('renders a finite progress indicator', () => {
    matchSnapshot({ percent: 50 });
  });

  it('renders a success indicator', () => {
    matchSnapshot({ percent: 100 });
  });
});
