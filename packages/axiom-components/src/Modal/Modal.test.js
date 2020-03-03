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
    const onRequestCloseSpy = jest.fn();
    const component = mount(<Modal isOpen onRequestClose={ onRequestCloseSpy } shouldCloseOnEsc />);
    expect(toJSON(component)).toMatchSnapshot();

    const keyboardEvent = new KeyboardEvent('keydown', { keyCode: 27, key: 'Escape' });
    document.body.dispatchEvent(keyboardEvent);
    expect(onRequestCloseSpy).toHaveBeenCalledTimes(1);
  });
});
