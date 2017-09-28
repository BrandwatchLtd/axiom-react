import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findRoute } from '../utils/navigation';
import { LayoutContent } from '../components/Layout';
import { ExampleHeader } from '../components/Example';
import './Doc.css';

export default class Doc extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { axiomLanguage, pathname } = this.context;
    const { axiomLanguage: nextAxiomLanguage, pathname: nextPathname } = nextContext;

    return nextPathname !== pathname || axiomLanguage !== nextAxiomLanguage;
  }

  render() {
    const { pathname } = this.context;
    const { props } = findRoute(pathname);
    const { examples, name } = props;

    return (
      <div className="dm-doc">
        <div className="dm-doc__header">
          <LayoutContent>
            <ExampleHeader name={ name } />
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
