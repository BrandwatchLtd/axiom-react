import React, { Component, PropTypes } from 'react';
import humanize from 'humanize-string';
import isPlainObject from 'lodash/isPlainObject';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Heading from 'bw-axiom/components/typography/Heading';
import Weak from 'bw-axiom/components/typography/Weak';
import ApiDocsDialogTrigger from 'style-guide/components/ApiDocs/ApiDocsDialogTrigger';
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
              <ApiDocsDialogTrigger imports={ { path, components } } />
            </GridCell>;
          } } }
        </Grid>
      </ExampleBox>
    );
  }
}
