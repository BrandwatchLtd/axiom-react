import React, { PropTypes } from 'react';
import { Layout, LayoutHeader, LayoutMain, LayoutSidebar, LayoutNav } from '../docs/layout';
import docStructure from './constants/docStructure';

const App = ({ children }) => {
  const items = [];

  Object.keys(docStructure).forEach(title => {
    const children = docStructure[title].map(({ title, route }) => ({
      title,
      route,
    }));

    items.push({
      title,
      children,
    });
  });

  return (
    <Layout>
      <LayoutHeader>
        Axiom | Brandwatch Style Guide
      </LayoutHeader>
      <LayoutSidebar>
        <LayoutNav items={ items } />
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
