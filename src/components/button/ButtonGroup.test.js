import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonGroup, Button } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ButtonGroup { ...props }>
      <Button>Lorem ipsum</Button>
    </ButtonGroup>
  );
}

describe('ButtonGroup', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
