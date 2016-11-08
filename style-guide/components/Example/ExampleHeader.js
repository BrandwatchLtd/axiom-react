import React, { Component, PropTypes } from 'react';
import humanize from 'humanize-string';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Heading from 'bw-axiom/components/typography/Heading';
import Weak from 'bw-axiom/components/typography/Weak';
import ApiDocsDialogTrigger from 'style-guide/components/ApiDocs/ApiDocsDialogTrigger';
import ExampleBox from './ExampleBox';

export default class ExampleHeader extends Component {
  static propTypes = {
    components: PropTypes.array,
    location: PropTypes.string,
    title: PropTypes.string.isRequired,
    trail: PropTypes.array.isRequired,
  };

  render() {
    const {
      components,
      location,
      title,
      trail,
    } = this.props;

    return (
      <ExampleBox>
        <Grid vAlign="bottom">
          <GridCell>
            <Heading style="title" textCase="capital">{ humanize(trail.join(' / ')) }</Heading>
            <Heading style="display" textCase="capital">
              <Weak>{ title }</Weak>
            </Heading>
          </GridCell>

          { do { if (location && components) {
            <GridCell shrink={ true }>
              <ApiDocsDialogTrigger imports={ { location, components } } />
            </GridCell>;
          } } }
        </Grid>
      </ExampleBox>
    );
  }
}
