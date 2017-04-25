import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { buildNavigationItem, buildNavigationItems, normalisePathname } from '../utils/navigation';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain } from '../components/Layout';
import Navigation from '../components/Navigation';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { location } = this.props;
    const { pathname } = location;

    this.updateActiveRouteState(normalisePathname(pathname));
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const { pathname } = location;
    const { location: nextLocation } = nextProps;
    const { pathname: nextPathname } = nextLocation;

    if (nextPathname !== pathname) {
      this.updateActiveRouteState(normalisePathname(nextPathname));
    }
  }

  onItemClick({ path, children }) {
    this.setState({ openPath: path });

    if (!children) {
      this.setState({ activePath: path });
    }
  }

  updateActiveRouteState(pathname) {
    this.setState({
      activePath: pathname,
      openPath: pathname,
    });
  }

  render() {
    const { children } = this.props;
    const { activePath, openPath } = this.state;
    const navigationItems = buildNavigationItems(activePath, openPath);

    [{ id: 'labs', path: '/labs' }]
      .forEach((item) => navigationItems.push(buildNavigationItem(activePath, openPath, item)));

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <Navigation
              items={ navigationItems }
              onItemClick={ ::this.onItemClick } />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
