import React from 'react';
import renderer from 'react-test-renderer';
import Body from './';

describe('Body', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <Body>
          <div>Test</div>
        </Body>
      ).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
