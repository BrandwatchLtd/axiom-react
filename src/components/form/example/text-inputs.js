import React, { Component } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Heading from '../../typography/Heading';
import TextInput from '../TextInput';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="TextInputs">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              <Heading level={ 5 } snippetSkip={ true }>Standard</Heading>
              <TextInput placeholder="Standard input..." />
            </GridCell>
            <GridCell snippetIgnore={ true }>
              <Heading level={ 5 } snippetSkip={ true }>Disabled</Heading>
              <TextInput disabled={ true } placeholder="Disabled input..." />
            </GridCell>
          </Grid>
        </Snippet>

        <Heading level={ 5 }>Validation</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              <Heading level={ 5 } snippetSkip={ true }>Valid</Heading>
              <TextInput placeholder="Valid input..." valid={ true } />
            </GridCell>

            <GridCell snippetIgnore={ true }>
              <Heading level={ 5 } snippetSkip={ true }>Invalid</Heading>
              <TextInput invalid={ true } placeholder="Invalid input..." />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
