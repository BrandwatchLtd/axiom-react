import React, { PropTypes } from 'react';
import { Layout, LayoutHeader, LayoutMain } from './layout';

const Index = ({ children }) => (
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

Index.propTypes = {
  children: PropTypes.node,
};

export default Index;
