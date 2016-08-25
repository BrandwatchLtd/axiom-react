import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutHeader } from './';

describe('LayoutHeader', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <LayoutHeader>
          <div>Test</div>
        </LayoutHeader>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
