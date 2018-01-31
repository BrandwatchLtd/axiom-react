import React from 'react';
import renderer from 'react-test-renderer';
import Cloak from './Cloak';

const getComponent = (props = {}) =>
  renderer.create(
    <Cloak { ...props }>
      Lorem Ipsum
    </Cloak>
  );

describe('Cloak', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders invisible true', () => {
    const component = getComponent({ invisible: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders invisible false', () => {
    const component = getComponent({ invisible: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
