import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './Notification';

function getComponent(props = {}) {
  return renderer.create(
    <Notification { ...props }>
      Lorem ipsum
    </Notification>
  );
}

describe('Notification', () => {
  it('renders with defaultProps', () => {
    const component = getComponent({ type: 'info' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onRemoveClick', () => {
    const component = getComponent({ type: 'info', onRemoveClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with type', () => {
    ['error', 'info', 'success', 'warning'].forEach((type) => {
      it(type, () => {
        const component = getComponent({ type });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
