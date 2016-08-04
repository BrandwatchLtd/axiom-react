import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, LayoutHeader, LayoutSidebar, LayoutSidebarHeader, LayoutSidebarContent, LayoutMain, LayoutNav, LayoutFooter } from 'bw-axiom/react/layouts/established';
import * as docsActions from 'style-guide/actions/docs';
import * as searchActions from 'style-guide/actions/search';
import SearchInput from 'style-guide/components/Search/SearchInput';
import { buildNavigationItems } from 'style-guide/utils/documentation-navigation';

export class Docs extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    docsState: PropTypes.shape({
      activePath: PropTypes.array.isRequired,
      openPath: PropTypes.array.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    searchState: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    this.boundDocsActions = bindActionCreators(docsActions, dispatch);
    this.boundSearchActions = bindActionCreators(searchActions, dispatch);
  }

  onItemClick({ path }) {
    const { docsSetOpenPath } = this.boundDocsActions;
    docsSetOpenPath(path);
  }

  render() {
    const {
      children,
      docsState: {
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
            <LayoutNav
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
    docsState: state.docs,
    searchState: state.search,
  };
}

export default connect(select)(Docs);
