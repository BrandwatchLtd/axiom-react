import React from 'react';
import renderer from 'react-test-renderer';
import Dialog from './Dialog';

const getComponent = (props = {}) =>
  renderer.create(
    <Dialog { ...props }>
      Lorem ipsum
    </Dialog>
  );

describe('Dialog', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with fullscreen', () => {
    const component = getComponent({ fullscreen: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
