import React from 'react';
import renderer from 'react-test-renderer';
import BulletBars from './BulletBars';
import { formattedData } from './BulletBars.test.fixture';

function getComponent(props = {}) {
  props.values = formattedData;

  return renderer.create(
    <BulletBars { ...props }>
    </BulletBars>
  );
}

describe('BulletBars', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with the correct label', () => {
    const props = {
      barLabel: 'label for highest value',
      showBarLabel: true,
    };
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
