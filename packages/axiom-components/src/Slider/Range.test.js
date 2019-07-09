import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Range from './Range';

const requiredProps = { disabled: false, min: 0, max: 20, values: [3.03, 12.6], onChange: jest.fn() };

const getComponent = (props = {}) => {
  const newProps = { ...requiredProps, ...props };
  return renderer.create(
    <Range { ...newProps }/>
  );
};

jest.mock('../Position/Position');

describe('Range', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const component = getComponent({
      markerValue: 8,
      size: 'medium',
      step: 0.1,
      valueFormatter: x=>Math.floor(x),
      withTooltip: true,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('resets its values when they are out of bounds', () => {
    getComponent({
      min: 0,
      max: 1,
      values: [-1, 2],
    });

    expect(requiredProps.onChange).toHaveBeenCalledWith([0, 1]);
  });

  describe('withBoundingClientRect', () => {
    beforeEach(() => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          width: 120,
          height: 120,
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        };
      });
    });

    it('picks the right handle when the handles are on the same value', () => {
      const props = {
        ...requiredProps,
        onChange: jest.fn(),
        values: [2, 2],
      };
      const component = mount(<Range { ...props } />);

      const tracker = component.find('.ax-slider__track');
      tracker.simulate('mousedown', { clientX: 5 });

      const event = new MouseEvent('mousemove', { clientX: 5 });
      document.dispatchEvent(event);

      tracker.simulate('mouseup', { clientX: 5 });

      expect(props.onChange).toHaveBeenCalledWith([2, 5]);
    });

    it('prevents Handle crossing on change', () => {
      const props = {
        ...requiredProps,
        onChange: jest.fn(),
        values: [1, 2],
      };
      const component = mount(<Range { ...props } />);

      const tracker = component.find('.ax-slider__track');
      tracker.simulate('mousedown', { clientX: 0 });

      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith([0, 2]);

      const event = new MouseEvent('mousemove', { clientX: 3 });
      document.dispatchEvent(event);

      expect(props.onChange).toHaveBeenCalledTimes(2);
      expect(props.onChange).toHaveBeenCalledWith([2, 2]);
    });

    it('prevents Handle crossing on slide end', () => {
      const props = {
        ...requiredProps,
        onSlideEnd: jest.fn(),
        values: [1, 2],
      };

      const component = mount(<Range { ...props } />);

      const tracker = component.find('.ax-slider__track');
      tracker.simulate('mousedown', { clientX: 0 });

      const event2 = new MouseEvent('mouseup', { clientX: 3 });
      document.dispatchEvent(event2);

      expect(props.onSlideEnd).toHaveBeenCalledTimes(1);
      expect(props.onSlideEnd).toHaveBeenCalledWith([2, 2]);
    });
  });
});
