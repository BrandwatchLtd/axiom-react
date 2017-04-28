import PropTypes from 'prop-types';
import React, { Component } from 'react';
import isPlainObject from 'lodash.isplainobject';
import { Grid, GridCell, Heading, Weak } from 'bw-axiom';
import ApiDocs from '../ApiDocs';
import './ExampleHeader.css';

function shouldShowApiDocs(components) {
  return isPlainObject(components) && Object.keys(components).length > 0;
}

export default class ExampleHeader extends Component {
  static propTypes = {
    components: PropTypes.object,
    name: PropTypes.string,
  };

  render() {
    const { components, name } = this.props;

    return (
      <div className="dm-example-header">
        <Grid verticalAlign="end">
          <GridCell>
            <Heading style="display" textCase="capital">
              <Weak>{ name }</Weak>
            </Heading>
          </GridCell>

          { shouldShowApiDocs(components) && (
            <GridCell shrink={ true }>
              <ApiDocs imports={ { components } } />
            </GridCell>
          ) }
        </Grid>
      </div>
    );
  }
}
