import React, { Component, PropTypes } from 'react';
import { Heading } from 'bw-axiom';
import ApiDocsProp from './ApiDocsProp';

if (__INCLUDE_CSS__) {
  require('./ApiDocsList.scss');
}

export default class ApiDocsList extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  };

  render()  {
    const { componentName, props } = this.props;

    return (
      <div className="dm-api-docs-list">
        <Heading key="heading" style="title">{ componentName }</Heading>

        { Object.keys(props).sort().map((prop, index) =>
          <div className="dm-api-docs-list__item" key={ index }>
            <ApiDocsProp
                propData={ props[prop] }
                propName={ prop } />
          </div>
        ) }
      </div>
    );
  }
}
