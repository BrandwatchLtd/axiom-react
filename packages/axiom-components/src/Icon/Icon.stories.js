import React from 'react';
import Icon from './Icon';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import iconNames from './iconNames';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export function Default() {
  return (
    <Grid responsive={ false }>
      { iconNames.map(name => (
        <GridCell key={ name } width={ 25 }>
          <Grid gutters="tiny" none responsive={ false } verticalAlign="middle">
            <GridCell>
              <Icon name={ name } />
            </GridCell>

            <GridCell>{ name }</GridCell>
          </Grid>
        </GridCell>
      )) }
    </Grid>
  );
}
