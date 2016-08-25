import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './';

describe('Layout', () => {
  let component;

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(
        <Layout>
          <div>Test</div>
        </Layout>).toJSON();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
