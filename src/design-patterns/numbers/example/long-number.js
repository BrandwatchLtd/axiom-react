import React, { Component } from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import TextInput from '../../../components/form/TextInput';
import Heading from '../../../components/typography/Heading';
import Paragraph from '../../../components/typography/Paragraph';
import { longNumber } from '../numbers';
import Example from 'style-guide/components/Example/Example';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

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
      <Example name="Long number">
        <Grid>
          <GridCell>
            <TextInput
                defaultValue={ number }
                label="Number to format"
                onChange={ ::this.updateNumber } />

            <TextInput
                defaultValue={ precision }
                label="Precision (decimals)"
                onChange={ ::this.updatePrecision } />
          </GridCell>

          <GridCell>
            <Heading>Formatted number</Heading>
            <Paragraph>{ longNumber(number, precision) }</Paragraph>
          </GridCell>
        </Grid>

        <CodeSnippet language="js">LongNumber(Number [, Number]);</CodeSnippet>
      </Example>
    );
  }
}
