import React from 'react';
import renderer from 'react-test-renderer';
import LayoutSidebar from './';

describe('LayoutSidebar', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <LayoutSidebar>
          <div>Test</div>
        </LayoutSidebar>
      ).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
