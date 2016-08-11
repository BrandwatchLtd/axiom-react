import React, { PropTypes } from 'react';
import { Layout, LayoutHeader, LayoutMain } from '../docs/layout';

const App = ({ children }) => (
  <Layout>
    <LayoutHeader>
      Axiom | Brandwatch Style Guide
    </LayoutHeader>
    <LayoutMain>
      <div>
        { children }
      </div>
    </LayoutMain>
  </Layout>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
