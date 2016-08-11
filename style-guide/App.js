import React, { PropTypes } from 'react';
import { Layout, LayoutHeader, LayoutMain, LayoutSidebar, LayoutNav } from '../docs/layout';
import docStructure from './constants/docStructure';

const App = ({ children }) => {
  return (
    <Layout>
      <LayoutHeader>
        Axiom | Brandwatch Style Guide
      </LayoutHeader>
      <LayoutSidebar>
        <LayoutNav items={ docStructure } />
      </LayoutSidebar>
      <LayoutMain>
        <div>
          { children }
        </div>
      </LayoutMain>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
