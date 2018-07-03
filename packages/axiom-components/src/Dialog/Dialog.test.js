import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Dialog from './Dialog';


const getComponent = () => {
  const props = {
    isOpen: true,
    onRequestClose:  jest.fn(() => 'onRequestClose'),
  };
  return renderer.create(
    <Dialog { ...props }>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      accumsan imperdiet leo, eget fringilla tellus. Praesent turpis
      libero, maximus lobortis ex vel, feugiat feugiat sapien. Nam in
      velit orci. Donec dignissim rutrum tellus, vitae fermentum augue
      blandit vitae. Vestibulum egestas sapien a tortor placerat, ut
      blandit
    </Dialog>
  );
};

describe('Dialog', () => {
  it('renders with required props', () => {

    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });

    const component = getComponent();
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    ReactDOM.createPortal.mockClear();
  });
});
