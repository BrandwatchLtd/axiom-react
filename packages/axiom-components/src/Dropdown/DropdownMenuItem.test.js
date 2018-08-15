import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenuItem from './DropdownMenuItem';
import toJson from 'enzyme-to-json';

const render = (props = {}, opts = {}) => {
  return shallow(
    <DropdownMenuItem { ...props }>
      Test
    </DropdownMenuItem>, opts);
} ;

const wrapElementWithContext = (element, context) => {
  const Children = element.props().children(context);
  return shallow(Children);
};

describe('DropdownMenuItem', () => {
  let props;
  let opts;
  let mockEvent;

  beforeEach(() => {
    props = {
      disabled: false,
      keepOpen: false,
      multiSelect: false,
    };
    mockEvent = {};
  });

  describe('onClick', () => {
    let mockCloseDropdown;
    let context;

    beforeEach(() => {
      mockCloseDropdown = jest.fn();
      context = { closeDropdown: mockCloseDropdown };
    });

    it('closes the dropdown menu when clicked', () => {
      const element = render(props, opts);
      const elementWithContext = wrapElementWithContext(element, context);
      elementWithContext.simulate('click', mockEvent);
      expect(mockCloseDropdown).toHaveBeenCalledTimes(1);
    });

    it('does not close the dropdown when multiSelect is set', () => {
      props.multiSelect = true;
      const element = render(props, opts);
      const elementWithContext = wrapElementWithContext(element, context);
      elementWithContext.simulate('click', mockEvent);
      expect(mockCloseDropdown).not.toHaveBeenCalled();
    });

    it('does not close the dropdown when keepOpen is set', () => {
      props.keepOpen = true;
      const element = render(props, opts);
      const elementWithContext = wrapElementWithContext(element, context);
      elementWithContext.simulate('click', mockEvent);
      expect(mockCloseDropdown).not.toHaveBeenCalled();
    });
  });

  describe('Snapshots', () => {
    it('renders with defaultProps', () => {
      expect(toJson(wrapElementWithContext(render()))).toMatchSnapshot();
    });

    it('renders with disabled', () => {
      expect(toJson(wrapElementWithContext(render({
        disabled: true,
      }, opts)))).toMatchSnapshot();
    });

    it('renders with index', () => {
      expect(toJson(wrapElementWithContext(render({
        index: '1',
      }, opts)))).toMatchSnapshot();
    });

    it('renders with keepOpen', () => {
      expect(toJson(wrapElementWithContext(render({
        keepOpen: true,
      }, opts)))).toMatchSnapshot();
    });

    it('renders with multiSelect', () => {
      expect(toJson(wrapElementWithContext(render({
        multiSelect: true,
      }, opts)))).toMatchSnapshot();
    });

    it('renders with onClick', () => {
      expect(toJson(wrapElementWithContext(render({
        onClick: () => {},
      }, opts)))).toMatchSnapshot();
    });

    it('renders with onMouseOver', () => {
      expect(toJson(wrapElementWithContext(render({
        onMouseOver: () => { },
      }, opts)))).toMatchSnapshot();
    });
  });
});
