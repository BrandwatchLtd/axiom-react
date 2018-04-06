import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenuItem from './DropdownMenuItem';
import toJson from 'enzyme-to-json';

function render(props = {}, opts = {}) {
  return shallow(
    <DropdownMenuItem { ...props }>
      Test
    </DropdownMenuItem>, opts);
}

describe('DropdownMenuItem', () => {
  let props;
  let opts;
  let mockEvent;

  beforeEach(() => {
    props = {
      disabled: false,
      index: '1',
      keepOpen: false,
      multiSelect: false,
      onClick: jest.fn(),
      onMouseOver: jest.fn(),
    };
    opts = {
      context: {
        closeDropdown: jest.fn(),
        addMenuItem: jest.fn(),
        moveMenuItem: jest.fn(),
        removeMenuItem: jest.fn(),
        focusedIndex: '0',
        setFocusedIndex: jest.fn(),
      },
    };
    mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
  });

  describe('componentWillMount', () => {
    it('registers itself with the dropdown menu', () => {
      render(props, opts);
      expect(opts.context.addMenuItem).toHaveBeenCalledTimes(1);
      expect(opts.context.addMenuItem).toHaveBeenCalledWith(props.index);
    });

    it('does not register itself with the dropdown menu if it is disabled', () => {
      props.disabled = true;
      render(props, opts);
      expect(opts.context.addMenuItem).toHaveBeenCalledTimes(0);
    });
  });

  describe('componentWillUnmount', () => {
    it('unregisters itself from the dropdown menu', () => {
      render(props, opts).unmount();
      expect(opts.context.removeMenuItem).toHaveBeenCalledTimes(1);
      expect(opts.context.removeMenuItem).toHaveBeenCalledWith(props.index);
    });
  });

  describe('componentWillReceiveProps', () => {
    it('registers it\'s new position with the dropdown if the index changes', () => {
      const index = '2';
      const component = render(props, opts);
      expect(opts.context.moveMenuItem).toHaveBeenCalledTimes(0);
      component.setProps({ ...props, index });
      expect(opts.context.moveMenuItem).toHaveBeenCalledTimes(1);
      expect(opts.context.moveMenuItem).toHaveBeenCalledWith(props.index, index);
    });

    it('registers with the dropdown if the item is enabled', () => {
      props.disabled = true;
      const component = render(props, opts);
      expect(opts.context.addMenuItem).toHaveBeenCalledTimes(0);
      component.setProps({ ...props, disabled: false });
      expect(opts.context.addMenuItem).toHaveBeenCalledTimes(1);
      expect(opts.context.addMenuItem).toHaveBeenCalledWith(props.index);
    });

    it('unregisters with the dropdown if the item is removed', () => {
      const component = render(props, opts);
      expect(opts.context.removeMenuItem).toHaveBeenCalledTimes(0);
      component.setProps({ ...props, disabled: true });
      expect(opts.context.removeMenuItem).toHaveBeenCalledTimes(1);
      expect(opts.context.removeMenuItem).toHaveBeenCalledWith(props.index);
    });
  });

  describe('onClick', () => {
    it('closes the dropdown menu when clicked', () => {
      render(props, opts).simulate('click', mockEvent);
      expect(opts.context.closeDropdown).toHaveBeenCalledTimes(1);
    });

    it('calls the click property with the event when clicked', () => {
      render(props, opts).simulate('click', mockEvent);
      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith(mockEvent);
    });

    it('does not close the dropdown when multiSelect is set', () => {
      props.multiSelect = true;
      render(props, opts).simulate('click', mockEvent);
      expect(opts.context.closeDropdown).not.toHaveBeenCalled();
    });

    it('does not close the dropdown when keepOpen is set', () => {
      props.keepOpen = true;
      render(props, opts).simulate('click', mockEvent);
      expect(opts.context.closeDropdown).not.toHaveBeenCalled();
    });
  });

  describe('handleKeyDown', () => {
    it('triggers the click event if enter is pressed and the item is focused', () => {
      opts.context.focusedIndex = props.index;
      render(props, opts);
      document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('triggers the click event if enter is pressed and the item is not focused', () => {
      render(props, opts);
      document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));
      expect(props.onClick).toHaveBeenCalledTimes(0);
    });

    it('does not trigger the click event if non-enter key is pressed and the item is focused', () => {
      opts.context.focusedIndex = props.index;
      render(props, opts);
      document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }));
      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('handleMouseOver', () => {
    it('sets the focused index on the dropdown', () => {
      render(props, opts).simulate('mouseover', mockEvent);
      expect(opts.context.setFocusedIndex).toHaveBeenCalledTimes(1);
      expect(opts.context.setFocusedIndex).toHaveBeenCalledWith(props.index);
    });

    it('calls the onMouseOver property event', () => {
      render(props, opts).simulate('mouseover', mockEvent);
      expect(props.onMouseOver).toHaveBeenCalledTimes(1);
      expect(props.onMouseOver).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe('Snapshots', () => {
    it('renders with defaultProps', () => {
      expect(toJson(render({}, opts))).toMatchSnapshot();
    });

    it('renders with disabled', () => {
      expect(toJson(render({
        disabled: true,
      }, opts))).toMatchSnapshot();
    });

    it('renders with index', () => {
      expect(toJson(render({
        index: '1',
      }, opts))).toMatchSnapshot();
    });

    it('renders with keepOpen', () => {
      expect(toJson(render({
        keepOpen: true,
      }, opts))).toMatchSnapshot();
    });

    it('renders with multiSelect', () => {
      expect(toJson(render({
        multiSelect: true,
      }, opts))).toMatchSnapshot();
    });

    it('renders with onClick', () => {
      expect(toJson(render({
        onClick: () => {},
      }, opts))).toMatchSnapshot();
    });

    it('renders with onMouseOver', () => {
      expect(toJson(render({
        onMouseOver: () => { },
      }, opts))).toMatchSnapshot();
    });
  });
});
