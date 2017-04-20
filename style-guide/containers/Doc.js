import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findRoute } from '../utils/navigation';
import { LayoutContent } from '../components/Layout';
import { ExampleHeader } from '../components/Example';
import './Doc.css';

export default class Doc extends Component {
  static contextTypes = {
    pathname: PropTypes.string.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { pathname } = this.context;
    const { pathname: nextPathname } = nextContext;

    return nextPathname !== pathname;
  }

  render() {
    const { pathname } = this.context;
    const { props } = findRoute(pathname);
    const { examples, name, apiDocs = [] } = props;
    const components = apiDocs.reduce((docs, componentName) => ({ ...docs,
      [componentName]: __COMPONENT_PROPS__[componentName],
    }), {});

    return (
      <div className="dm-doc">
        <div className="dm-doc__header">
          <LayoutContent>
            <ExampleHeader
                components={ components }
                name={ name } />
          </LayoutContent>
        </div>

        <div className="dm-doc__body">
          <LayoutContent>
            { examples.map((Example, index) =>
              <Example
                  components={ __COMPONENT_PROPS__ }
                  key={ index } />
            ) }
          </LayoutContent>
        </div>
      </div>
    );
  }
}
