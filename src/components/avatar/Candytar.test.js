import React from 'react';
import renderer from 'react-test-renderer';
import { Candytar } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Candytar src="/image/path" { ...props } />
  );
}

describe('Candytar', () => {
  it('renders with custom size', () => {
    const component = getComponent({ color: 'rose', size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color rose', () => {
    const component = getComponent({ color: 'rose' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color pink', () => {
    const component = getComponent({ color: 'pink' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color purple', () => {
    const component = getComponent({ color: 'purple' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color lilac', () => {
    const component = getComponent({ color: 'lilac' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color blue', () => {
    const component = getComponent({ color: 'blue' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color teal', () => {
    const component = getComponent({ color: 'teal' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color green', () => {
    const component = getComponent({ color: 'green' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color chartreuse', () => {
    const component = getComponent({ color: 'chartreuse' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color amber', () => {
    const component = getComponent({ color: 'amber' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color orange', () => {
    const component = getComponent({ color: 'orange' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color brown', () => {
    const component = getComponent({ color: 'brown' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with color grey', () => {
    const component = getComponent({ color: 'grey' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
