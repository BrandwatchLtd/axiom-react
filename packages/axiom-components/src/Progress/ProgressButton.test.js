import React from 'react';
import renderer from 'react-test-renderer';
import ProgressButton from './ProgressButton';

const getComponent = (props = {}) =>
  renderer.create(<ProgressButton {...props}>Lorem</ProgressButton>);

describe('ProgressButton', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with isInProgress', () => {
    const component = getComponent({ isInProgress: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach(size =>
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      })
    );
  });
});
