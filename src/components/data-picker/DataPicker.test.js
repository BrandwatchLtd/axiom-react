import React from 'react';
import renderer from 'react-test-renderer';
import { DataPicker } from 'bw-axiom';

const getComponent = (props = {}) =>
  renderer.create(
    <DataPicker { ...props }
        placeholder="Lorem ipsum">
      Lorem Ipsum
    </DataPicker>
  );

describe('DataPicker', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with value', () => {
    const component = getComponent({ value: 'Dolar amor' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

