import React, { Component } from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import TextInput from '../../../components/form/TextInput';
import Heading from '../../../components/typography/Heading';
import Paragraph from '../../../components/typography/Paragraph';
import { shortNumber } from '../numbers';
import Example from 'style-guide/components/Example/Example';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

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
            <Paragraph>{ shortNumber(number, precision) }</Paragraph>
          </GridCell>
        </Grid>

        <CodeSnippet language="js">shortNumber(Number [, Number]);</CodeSnippet>
      </Example>
    );
  }
}
