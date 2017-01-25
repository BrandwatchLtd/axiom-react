import React from 'react';
import renderer from 'react-test-renderer';
import { TextInputIcon } from 'bw-axiom';

function getComponent(props = { name: 'twitter' }) {
  return renderer.create(
    <TextInputIcon { ...props } />
  );
}

describe('TextInputIcon', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
