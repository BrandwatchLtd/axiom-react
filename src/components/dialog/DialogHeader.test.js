import React from 'react';
import renderer from 'react-test-renderer';
import DialogHeader from './DialogHeader';

const getComponent = (props = {}) =>
  renderer.create(
    <DialogHeader { ...props }>
      Lorem ipsum
    </DialogHeader>
  );

describe('DialogHeader', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
