import React, { Component } from 'react';
import { Grid, GridCell } from 'bw-axiom/react';
import { TextInput } from 'bw-axiom/react';
import { Heading, Paragraph } from 'bw-axiom/react';
import { longNumber } from 'bw-axiom/common/formatting-numbers';

export default class LongNumber extends Component {
  componentWillMount() {
    this.setState({
      number: 123456789,
      precision: 2,
    });
  }

  updateNumber(event) {
    this.setState({ number: parseFloat(event.target.value, 10) });
  }

  updatePrecision(event) {
    this.setState({ precision: parseInt(event.target.value, 10) });
  }

  render() {
    const { number, precision } = this.state;

    return (
      <Grid>
        <GridCell>
          <Heading level={ 5 }>Number to format</Heading>
          <TextInput
              defaultValue={ number }
              onChange={ ::this.updateNumber } />
          <Heading level={ 5 }>Precision (decimals)</Heading>
          <TextInput
              defaultValue={ precision }
              onChange={ ::this.updatePrecision } />
        </GridCell>

        <GridCell>
          <Heading level={ 5 }>Formatted number</Heading>
          <Paragraph>{ longNumber(number, precision) }</Paragraph>
        </GridCell>
      </Grid>
    );
  }
}
