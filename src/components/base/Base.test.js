import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Base from './Base';

const getComponent = (props = {}) =>
  renderer.create(
    <Base { ...props } />
  );

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
    const CustomComponent = () => <span />;
    const component = getComponent({ Component: CustomComponent });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders className', () => {
    const component = getComponent({ className: 'Lorem Ipsum' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with hiddenUntil', () => {
    ['small', 'medium', 'large'].forEach((hiddenUntil) => {
      it(hiddenUntil, () => {
        const component = getComponent({ hiddenUntil });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with visibleUntil', () => {
    ['small', 'medium', 'large'].forEach((visibleUntil) => {
      it(visibleUntil, () => {
        const component = getComponent({ visibleUntil });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders sticky without style', () => {
    const component = getComponent({ sticky: '1rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders sticky with style', () => {
    const component = getComponent({ sticky: '1rem', style: { height: '1rem' } });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with textBreak', () => {
    ['none', 'all', 'word'].forEach((textBreak) => {
      it(textBreak, () => {
        const component = getComponent({ textBreak });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with textCenter', () => {
    [true, 'small', 'medium', 'large'].forEach((textCenter) => {
      it(textCenter, () => {
        const component = getComponent({ textCenter });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with textCase', () => {
    ['upper', 'capital', 'lower'].forEach((textCase) => {
      it(textCase, () => {
        const component = getComponent({ textCase });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });


  describe('renders with textColor', () => {
    [
      'dark',
      'disabled',
      'error',
      'light',
      'subtle',
      'success',
      'warning',
    ].forEach((textColor) => {
      it(textColor, () => {
        const component = getComponent({ textColor });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders textEllipsis', () => {
    const component = getComponent({ textEllipsis: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textEmphasize', () => {
    const component = getComponent({ textEmphasize: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with textLeft', () => {
    [true, 'small', 'medium', 'large'].forEach((textLeft) => {
      it(textLeft, () => {
        const component = getComponent({ textLeft });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with textRight', () => {
    [true, 'small', 'medium', 'large'].forEach((textRight) => {
      it(textRight, () => {
        const component = getComponent({ textRight });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('renders with textSize', () => {
    [
      'display2',
      'display1',
      'headline',
      'headtitle',
      'large',
      'label',
      'body',
      'small',
    ].forEach((textSize) => {
      it(textSize, () => {
        const component = getComponent({ textSize });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('renders textStrike', () => {
    const component = getComponent({ textStrike: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textStrong', () => {
    const component = getComponent({ textStrong: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders textUnderline', () => {
    const component = getComponent({ textUnderline: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
