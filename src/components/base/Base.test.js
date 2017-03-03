import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { Base } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <Base { ...props } />
  );
}

describe('Base', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders string Component', () => {
    const component = getComponent({ Component: 'span' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders class Component', () => {
    class CustomComponent extends Component {
      render() {
        return (
          <span />
        );
      }
    }

    const component = getComponent({ Component: CustomComponent });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders functional Component', () => {
    function CustomComponent() {
      return (
        <span />
      );
    }

    const component = getComponent({ Component: CustomComponent });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders className', () => {
    const component = getComponent({ className: 'Lorem Ipsum' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders hiddenUntil always', () => {
    const component = getComponent({ hiddenUntil: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders hiddenUntil passed small breakpoint', () => {
    const component = getComponent({ hiddenUntil: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders hiddenUntil passed medium breakpoint', () => {
    const component = getComponent({ hiddenUntil: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders hiddenUntil passed large breakpoint', () => {
    const component = getComponent({ hiddenUntil: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders visibleUntil always', () => {
    const component = getComponent({ visibleUntil: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders visibleUntil passed small breakpoint', () => {
    const component = getComponent({ visibleUntil: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders visibleUntil passed medium breakpoint', () => {
    const component = getComponent({ visibleUntil: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders visibleUntil passed large breakpoint', () => {
    const component = getComponent({ visibleUntil: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textBreak none', () => {
    const component = getComponent({ textBreak: 'none' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textBreak all', () => {
    const component = getComponent({ textBreak: 'all' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textBreak word', () => {
    const component = getComponent({ textBreak: 'word' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCase upper', () => {
    const component = getComponent({ textCase: 'upper' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCase capital', () => {
    const component = getComponent({ textCase: 'capital' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCase lower', () => {
    const component = getComponent({ textCase: 'lower' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCenter always', () => {
    const component = getComponent({ textCenter: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCenter passed small breakpoint', () => {
    const component = getComponent({ textCenter: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCenter passed medium breakpoint', () => {
    const component = getComponent({ textCenter: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textCenter passed large breakpoint', () => {
    const component = getComponent({ textCenter: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor dark', () => {
    const component = getComponent({ textColor: 'dark' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor disabled', () => {
    const component = getComponent({ textColor: 'disabled' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor error', () => {
    const component = getComponent({ textColor: 'error' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor light', () => {
    const component = getComponent({ textColor: 'light' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor subtle', () => {
    const component = getComponent({ textColor: 'subtle' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor success', () => {
    const component = getComponent({ textColor: 'success' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textColor warning', () => {
    const component = getComponent({ textColor: 'warning' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textLeft always', () => {
    const component = getComponent({ textLeft: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textLeft passed small breakpoint', () => {
    const component = getComponent({ textLeft: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textLeft passed medium breakpoint', () => {
    const component = getComponent({ textLeft: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textLeft passed large breakpoint', () => {
    const component = getComponent({ textLeft: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textRight always', () => {
    const component = getComponent({ textRight: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textRight passed small breakpoint', () => {
    const component = getComponent({ textRight: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textRight passed medium breakpoint', () => {
    const component = getComponent({ textRight: 'medium' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textRight passed large breakpoint', () => {
    const component = getComponent({ textRight: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textEllipsis', () => {
    const component = getComponent({ textEllipsis: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textStrong', () => {
    const component = getComponent({ textStrong: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textWeak', () => {
    const component = getComponent({ textWeak: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders theme dark', () => {
    const component = getComponent({ theme: 'dark' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders theme light', () => {
    const component = getComponent({ theme: 'light' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
