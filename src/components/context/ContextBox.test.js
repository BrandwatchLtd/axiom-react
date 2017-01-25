import React from 'react';
import renderer from 'react-test-renderer';
import { ContextBox } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextBox { ...props }>
      Lorem ipsum
    </ContextBox>
  );
}

describe('ContextBox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders top start', () => {
    const component = getComponent({ position: 'top', offset: 'start' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders top middle', () => {
    const component = getComponent({ position: 'top', offset: 'middle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders top end', () => {
    const component = getComponent({ position: 'top', offset: 'end' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders right start', () => {
    const component = getComponent({ position: 'right', offset: 'start' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders right middle', () => {
    const component = getComponent({ position: 'right', offset: 'middle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders right end', () => {
    const component = getComponent({ position: 'right', offset: 'end' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders bottom start', () => {
    const component = getComponent({ position: 'bottom', offset: 'start' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders bottom middle', () => {
    const component = getComponent({ position: 'bottom', offset: 'middle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders bottom end', () => {
    const component = getComponent({ position: 'bottom', offset: 'end' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders left start', () => {
    const component = getComponent({ position: 'left', offset: 'start' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders left middle', () => {
    const component = getComponent({ position: 'left', offset: 'middle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders left end', () => {
    const component = getComponent({ position: 'left', offset: 'end' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders unpadded', () => {
    const component = getComponent({ padded: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
