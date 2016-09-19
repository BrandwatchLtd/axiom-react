import React from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Heading from '../../typography/Heading';
import TextInput from '../TextInput';

export const base = (
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
);

export const validation = (
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
);
