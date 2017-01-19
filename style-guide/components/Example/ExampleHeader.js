import React, { Component, PropTypes } from 'react';
import humanize from 'humanize-string';
import isPlainObject from 'lodash.isPlainObject';
import { Grid, GridCell, Heading, Weak } from 'bw-axiom';
import ApiDocs from '../ApiDocs';
import ExampleBox from './ExampleBox';

function shouldShowApiDocs(components) {
  return isPlainObject(components) && Object.keys(components).length > 0;
}

export default class ExampleHeader extends Component {
  static propTypes = {
    components: PropTypes.object,
    path: PropTypes.string,
  };

  render() {
    const { components, path } = this.props;
    const route = path.match(/([a-z-]+)/g);
    const title = route[route.length - 1];
    const trail = route.slice(0, -1);

    return (
      <ExampleBox>
        <Grid vAlign="bottom">
          <GridCell>
            <Heading style="title" textCase="capital">{ humanize(trail.join(' / ')) }</Heading>
            <Heading style="display" textCase="capital">
              <Weak>{ humanize(title) }</Weak>
            </Heading>
          </GridCell>

          { do { if (shouldShowApiDocs(components)) {
            <GridCell shrink={ true }>
              <ApiDocs imports={ { path, components } } />
            </GridCell>;
          } } }
        </Grid>
      </ExampleBox>
    );
  }
}
