import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './Badge';

const getComponent = (props = {}) =>
  renderer.create(<Badge {...props}>Lorem Ipsum</Badge>);

describe('Badge', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity minimum 0.1', () => {
    const component = getComponent({ opacity: 0, color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity maximum 0.6', () => {
    const component = getComponent({ opacity: 0.7, color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity minimum 0.1 with color faded', () => {
    const component = getComponent({ opacity: 0, color: 'faded' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity maximum 0.3 with color faded', () => {
    const component = getComponent({ opacity: 0.7, color: 'faded' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity 1', () => {
    const component = getComponent({ opacity: 1, color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not render opacity 1 with color faded', () => {
    const component = getComponent({ opacity: 1, color: 'faded' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders onClick', () => {
    const component = getComponent({ onClick: () => {} });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity', () => {
    const component = getComponent({ opacity: 0.5, color: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders opacity with color faded', () => {
    const component = getComponent({ opacity: 0.2, color: 'faded' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    [
      'faded',
      'highlight',
      'success',
      'error',
      'tiny-clanger',
      'critical-mass',
      'paradise-lost',
      'serene-sea',
      'giant-leap',
      'moon-lagoon',
      'terra-form',
      'primeval-soup',
      'new-horizon',
      'blast-off',
      'ground-control',
      'luna-dust',
    ].forEach(color => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with full', () => {
    [true, 'small', 'medium', 'large'].forEach(full => {
      it(String(full), () => {
        const component = getComponent({ full });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
