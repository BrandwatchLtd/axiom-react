import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

const getComponent = (props = {}) =>
  renderer.create(<Icon name="twitter" {...props} />);

describe('Icon', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with inline', () => {
    const component = getComponent({ inline: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom size', () => {
    const component = getComponent({ size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom width', () => {
    const component = getComponent({ width: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom height', () => {
    const component = getComponent({ height: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
