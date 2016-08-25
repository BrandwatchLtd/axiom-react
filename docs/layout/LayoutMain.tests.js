import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutMain } from './';

describe('LayoutMain', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <LayoutMain>
          <div>Test</div>
        </LayoutMain>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
