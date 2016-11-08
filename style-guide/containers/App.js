import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as navigationActions from 'style-guide/actions/navigation';
import Layout from 'style-guide/components/Layout/Layout';
import LayoutHeader from 'style-guide/components/Layout/LayoutHeader';
import LayoutSidebar from 'style-guide/components/Layout/LayoutSidebar';
import LayoutMain from 'style-guide/components/Layout/LayoutMain';
import Nav from 'style-guide/components/Navigation/Nav';
import { buildNavigationItems } from 'style-guide/utils/navigation';

export class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    navigationState: PropTypes.shape({
      activePath: PropTypes.array.isRequired,
      openPath: PropTypes.array.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    this.boundNavigationActions = bindActionCreators(navigationActions, dispatch);
  }

  onItemClick({ path }) {
    const { navigationSetOpenPath } = this.boundNavigationActions;
    navigationSetOpenPath(path);
  }

  render() {
    const {
      children,
      navigationState: {
        activePath,
        openPath,
      },
    } = this.props;

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

function select(state) {
  return {
    navigationState: state.navigation,
  };
}

export default connect(select)(App);
