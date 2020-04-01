import React from 'react';
import renderer from 'react-test-renderer';
import ContextMenuItem from './ContextMenuItem';

const getComponent = (props = {}) =>
  renderer.create(<ContextMenuItem {...props}>Lorem ipsum</ContextMenuItem>);

describe('ContextMenuItem', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with selected', () => {
    const component = getComponent({ selected: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with title', () => {
    const component = getComponent({ title: 'Lorem ipsum dolor sit amet' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with multiSelect', () => {
    const component = getComponent({ multiSelect: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with multiSelect and title', () => {
    const component = getComponent({
      multiSelect: true,
      title: 'Lorem ipsum dolor sit amet',
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with multiSelect and selected', () => {
    const component = getComponent({ multiSelect: true, selected: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom icon', () => {
    const component = getComponent({ icon: 'heart' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
