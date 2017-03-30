import React, { Component, PropTypes } from 'react';
import { Candytar, Grid, GridCell, Heading, Paragraph } from 'bw-axiom';

export default class CardContent extends Component {
  static propTypes = {
    heading: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    heading: 'Lorem ipsum',
    size: 'medium',
  };

  render() {
    const { heading, size } = this.props;

    return (
      <Grid gutters={ size } responsive={ false } verticalAlign="middle">
        <GridCell shrink={ true }>
          <Candytar color="lilac" size="4.5rem" />
        </GridCell>

        <GridCell>
          <Heading style="title">{ heading }</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc commodo egestas fringilla. In a arcu erat. Ut vestibulum
            sollicitudin orci, ut blandit ante. Vestibulum tempus rhoncus
            vehicula.
          </Paragraph>
        </GridCell>
      </Grid>
    );
  }
}
