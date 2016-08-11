import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as navigationActions from 'style-guide/actions/navigation';
import * as searchActions from 'style-guide/actions/search';
import Layout from 'style-guide/components/Layout/Layout';
import LayoutHeader from 'style-guide/components/Layout/LayoutHeader';
import LayoutSidebar from 'style-guide/components/Layout/LayoutSidebar';
import LayoutSidebarHeader from 'style-guide/components/Layout/LayoutSidebarHeader';
import LayoutSidebarContent from 'style-guide/components/Layout/LayoutSidebarContent';
import LayoutMain from 'style-guide/components/Layout/LayoutMain';
import LayoutFooter from 'style-guide/components/Layout/LayoutFooter';
import Nav from 'style-guide/components/Navigation/Nav';
import SearchInput from 'style-guide/components/Search/SearchInput';
import { buildNavigationItems } from 'style-guide/utils/documentation-navigation';

export class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    navigationState: PropTypes.shape({
      activePath: PropTypes.array.isRequired,
      openPath: PropTypes.array.isRequired,
    }).isRequired,
    searchState: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    this.boundNavigationActions = bindActionCreators(navigationActions, dispatch);
    this.boundSearchActions = bindActionCreators(searchActions, dispatch);
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
      location,
      searchState,
    } = this.props;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <LayoutSidebarHeader>
            <SearchInput
                locationState={ location }
                searchActions={ this.boundSearchActions }
                searchState={ searchState } />
          </LayoutSidebarHeader>

          <LayoutSidebarContent>
            <Nav
                items={ buildNavigationItems(activePath, openPath) }
                onItemClick={ ::this.onItemClick } />
          </LayoutSidebarContent>
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
        <LayoutFooter />
      </Layout>
    );
  }
}

function select(state) {
  return {
    navigationState: state.navigation,
    searchState: state.search,
  };
}

export default connect(select)(App);
