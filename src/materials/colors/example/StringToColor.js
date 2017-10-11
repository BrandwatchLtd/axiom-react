import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import Paragraph from '../../../components/typography/Paragraph';
import TextInput from '../../../components/form/TextInput';
import stringToColor from '../stringToColor';

export default class StringToColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      string: 'my string',
    };

    this.handleStringChange = this.handleStringChange.bind(this);
  }

  handleStringChange(e) {
    this.setState({ string: e.target.value });
  }

  render() {
    const { string } = this.state;

    return (
      <Example name="String to color">
        <Paragraph>
          Takes a string and deterministically returns a random brand color.
        </Paragraph>
        <Grid>
          <GridCell>
            <TextInput
                defaultValue={ string }
                label="String"
                onChange={ this.handleStringChange } />
          </GridCell>
          <GridCell>
            <Heading>Color</Heading>
            <Paragraph>{ stringToColor(string) }</Paragraph>
          </GridCell>
        </Grid>
        <CodeSnippet language="js">{`
          stringToColor('${string}');
        `}</CodeSnippet>
      </Example>
    );
  }
}
