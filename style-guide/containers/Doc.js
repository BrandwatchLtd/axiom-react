import React, { PropTypes, Component } from 'react';
import LayoutContent from 'style-guide/components/Layout/LayoutContent';
import ExampleHeader from 'style-guide/components/Example/ExampleHeader';
import { getPathData, pathToRoute } from 'style-guide/utils/examples';
import { getFirstPath } from 'style-guide/utils/examples';

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

  render() {
    const {
      routeParams,
      location: {
        pathname,
        query: queryParams,
      },
    } = this.props;

    let tempPath = pathname;
    if (tempPath === '/') {
      tempPath = getFirstPath();
    }

    const route = pathToRoute(tempPath);
    const { examples, title, location, components } = getPathData(tempPath);

    return (
      <div className="dm-doc">
        <div className="dm-doc__header">
          <LayoutContent>
            <ExampleHeader
                components={ components }
                location={ location }
                title={ title }
                trail={ route.slice(0, -1) } />
          </LayoutContent>
        </div>

        <div className="dm-doc__body">
          <LayoutContent>
            { examples.map((Example, index) =>
              <Example
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
