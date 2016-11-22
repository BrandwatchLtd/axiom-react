import React, { PropTypes, Component } from 'react';
import Layout from 'style-guide/components/Layout/Layout';
import LayoutHeader from 'style-guide/components/Layout/LayoutHeader';
import LayoutSidebar from 'style-guide/components/Layout/LayoutSidebar';
import LayoutMain from 'style-guide/components/Layout/LayoutMain';
import Nav from 'style-guide/components/Navigation/Nav';
import { getFirstRoute, hasPathGotData, pathToRoute } from 'style-guide/utils/examples';
import { buildNavigationItems } from 'style-guide/utils/navigation';

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

    this.updateActiveRouteState(pathname);
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const { pathname } = location;
    const { location: nextLocation } = nextProps;
    const { pathname: nextPathname } = nextLocation;

    if (nextPathname !== pathname) {
      this.updateActiveRouteState(nextPathname);
    }
  }

  onItemClick({ route }) {
    this.setState({ openRoute: route });
  }

  updateActiveRouteState(pathname) {
    const currentRoute = hasPathGotData(pathname)
      ? pathToRoute(pathname)
      : getFirstRoute();

    this.setState({
      activeRoute: currentRoute,
      openRoute: currentRoute,
    });
  }

  render() {
    const { children } = this.props;
    const { activeRoute, openRoute } = this.state;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <Nav
              items={ buildNavigationItems(activeRoute, openRoute) }
              onItemClick={ ::this.onItemClick } />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
