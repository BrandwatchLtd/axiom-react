import React from 'react';
import renderer from 'react-test-renderer';
import Stat from './Stat';
import brandColors from '../../materials/colors/brandColors';

const getComponent = (props = {}) =>
  renderer.create(
    <Stat { ...props }>Lorem</Stat>
  );

describe('Stat', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    brandColors.forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
