import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './';

describe('Paragraph', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <Paragraph>
          Test
        </Paragraph>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('white', () => {
    beforeEach(() => {
      component = renderer.create(
        <Paragraph color="white">
          Test
        </Paragraph>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
