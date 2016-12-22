import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, TextInput } from 'bw-axiom';

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

          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              <TextInput
                  label="Valid"
                  placeholder="Valid input..."
                  valid={ true } />
            </GridCell>
            <GridCell snippetIgnore={ true }>
              <TextInput
                  invalid={ true }
                  label="Invalid"
                  placeholder="Invalid input..." />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
