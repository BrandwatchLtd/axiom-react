import React from 'react';
import renderer from 'react-test-renderer';
import ArrowHead from './ArrowHead';
import Base from '../Base/Base';

jest.mock('react-dom', () => ({
  findDOMNode() { return null; },
}));

const getComponent = (props = {}) =>
  renderer.create(
    <ArrowHead { ...props }>
      <Base>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        risus sit amet dolor tempus ornare ac eget dolor. Pellentesque ultrices
        iaculis nunc, tempor tempus magna vehicula ut. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Aliquam iaculis quam ut metus
        finibus, et facilisis risus porta.
      </Base>
    </ArrowHead>
  );

describe('ArrowHead', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = getComponent({ color: 'white' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = getComponent({ color: 'white' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
