import React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  it('renders', () => {
    const component = mount(<Modal isOpen />);
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('closes if a esc button was pressed', () => {
    const spy = jest.fn();
    const component = mount(
      <Modal isOpen onOverlayClick={spy} shouldCloseOnEsc />
    );
    expect(toJSON(component)).toMatchSnapshot();

    const keyboardEvent = new KeyboardEvent('keydown', {
      keyCode: 27,
      key: 'Escape',
    });
    document.body.dispatchEvent(keyboardEvent);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
