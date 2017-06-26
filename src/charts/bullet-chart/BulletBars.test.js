import React from 'react';
import renderer from 'react-test-renderer';
import BulletBars from './BulletBars';
import { formattedData } from './BulletBars.test.fixture';

function getComponent(props = {}) {
  props.values = formattedData;
  props.dataSetMax = props.dataSetMax || 101;

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

  describe('renders with the right height', () => {
    [100, 300].forEach((dataSetMax) => {
      it(dataSetMax, () => {
        const component = getComponent({ dataSetMax });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
