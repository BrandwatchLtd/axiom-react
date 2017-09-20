import React from 'react';
import renderer from 'react-test-renderer';
import ContextTip from './ContextTip';
import Paragraph from '../typography/Paragraph';

const getComponent = (props = {}) =>
  renderer.create(
    <ContextTip { ...props }>
      <Paragraph>Lorem ipsum</Paragraph>
    </ContextTip>
  );

describe('ContextTip', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
