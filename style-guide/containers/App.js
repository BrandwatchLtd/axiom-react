import React, { PropTypes, Component } from 'react';
import Layout from 'style-guide/components/Layout/Layout';
import LayoutHeader from 'style-guide/components/Layout/LayoutHeader';
import LayoutSidebar from 'style-guide/components/Layout/LayoutSidebar';
import LayoutMain from 'style-guide/components/Layout/LayoutMain';
import Nav from 'style-guide/components/Navigation/Nav';
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

  onItemClick({ path }) {
    this.setState({ openPath: path });
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

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <Nav
              items={ buildNavigationItems(activePath, openPath) }
              onItemClick={ ::this.onItemClick } />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
