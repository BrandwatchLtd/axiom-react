import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutNav } from './';

describe('LayoutNav', () => {
  let component;
  const items = [{
    title: 'Main page',
    children: [{
      title: 'Child title',
      route: '/route/to/somewhere',
    }],
  }];

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(<LayoutNav items={ items } />).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
