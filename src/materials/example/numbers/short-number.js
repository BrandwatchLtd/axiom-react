import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import Paragraph from '../../../components/typography/Paragraph';
import TextInput from '../../../components/form/TextInput';
import { shortNumber } from '../../number';

export default class ShortNumber extends Component {
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
      <Example name="Short number">
        <Grid>
          <GridCell>
            <TextInput
                defaultValue={ number }
                label="Number to format"
                onChange={ e => this.updateNumber(e) } />

            <TextInput
                defaultValue={ precision }
                label="Precision (decimals)"
                onChange={ e => this.updatePrecision(e) } />
          </GridCell>

          <GridCell>
            <Heading>Formatted number</Heading>
            <Paragraph>{ shortNumber(number, precision) }</Paragraph>
          </GridCell>
        </Grid>

        <CodeSnippet language="js">{`
          shortNumber(Number [, Number]);
        `}</CodeSnippet>
      </Example>
    );
  }
}
