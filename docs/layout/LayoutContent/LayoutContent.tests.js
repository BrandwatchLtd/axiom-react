import React from 'react';
import renderer from 'react-test-renderer';
import LayoutContent from './';

describe('LayoutContent', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <LayoutContent>
          <div>Test</div>
        </LayoutContent>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
