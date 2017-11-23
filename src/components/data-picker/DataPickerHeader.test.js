import React from 'react';
import renderer from 'react-test-renderer';
import DataPicker from './DataPicker';
import DataPickerHeader from './DataPickerHeader';

const getComponent = (props = {}) =>
  renderer.create(
    <DataPicker { ...props } placeholder="Placeholder">
      <DataPickerHeader />
    </DataPicker>
  );

describe('DataPickerHeader', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = getComponent({ color: 'giant-leap' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClear', () => {
    const component = getComponent({ onClear: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with value', () => {
    const component = getComponent({ value: 'Value' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


