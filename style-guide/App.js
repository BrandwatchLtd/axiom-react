import React, { PropTypes } from 'react';
import { Layout, LayoutHeader, LayoutMain, LayoutSidebar, LayoutNav, LayoutContent } from '../docs/layout';
import Logo from '../docs/components/logo';
import { Paragraph } from '../docs/typography';
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
        <Paragraph>
          Axiom | Brandwatch Style Guide
        </Paragraph>
      </LayoutHeader>
      <LayoutMain>
        <LayoutSidebar>
          <LayoutNav items={ items } />
        </LayoutSidebar>
        <LayoutContent>
          <div>
            { children }
          </div>
        </LayoutContent>
      </LayoutMain>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
