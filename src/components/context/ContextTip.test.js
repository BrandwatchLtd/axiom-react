import React from 'react';
import renderer from 'react-test-renderer';
import { ContextTip, Paragraph } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextTip { ...props }>
      <Paragraph>Lorem ipsum</Paragraph>
    </ContextTip>
  );
}

describe('ContextTip', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
