import React, { PropTypes, Component } from 'react';
import Examples from 'style-guide/constants/Examples';
import LayoutContent from 'style-guide/components/Layout/LayoutContent';
import ExampleHeader from 'style-guide/components/Example/ExampleHeader';
import { getFirstPath, getPathData } from 'style-guide/utils/structure';

if (__INCLUDE_CSS__) {
  require('./Doc.scss');
}

export default class Doc extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object.isRequired,
    }).isRequired,
    routeParams: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    const { location } = this.props;
    const { pathname } = location;
    const { location: nextLocation } = nextProps;
    const { pathname: nextPathname } = nextLocation;

    return nextPathname !== pathname;
  }

  render() {
    const {
      routeParams,
      location: {
        pathname,
        query: queryParams,
      },
    } = this.props;

    const { path, components = [] } = getPathData(pathname === '/' ? getFirstPath() : pathname);
    const examples = Examples[path];

    return (
      <div className="dm-doc">
        <div className="dm-doc__header">
          <LayoutContent>
            <ExampleHeader
                components={ components }
                path={ path } />
          </LayoutContent>
        </div>

        <div className="dm-doc__body">
          <LayoutContent>
            { examples.map((Example, index) =>
              <Example
                  components={ components }
                  key={ index }
                  queryParams={ queryParams }
                  routeParams={ routeParams } />
            ) }
          </LayoutContent>
        </div>
      </div>
    );
  }
}
