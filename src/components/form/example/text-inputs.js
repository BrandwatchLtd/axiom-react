import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import TextInput from '../TextInput';

export default class FormExample extends Component {
  render() {
    return (
      <Example name="TextInputs">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              <TextInput
                  label="Standard"
                  placeholder="Standard input..." />
            </GridCell>
            <GridCell snippetIgnore={ true }>
              <TextInput
                  disabled={ true }
                  label="Disabled"
                  placeholder="Disabled input..." />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
