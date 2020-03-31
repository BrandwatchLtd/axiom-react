import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Grid from './Grid';
import GridCell from './GridCell';
import Button from '../Button/Button';
import TextInput from '../Form/TextInput';

import './Grid.stories.css';

export default {
  title: 'Components/Grid',
  component: Grid,
  decorators: [withKnobs],
  subcomponents: { GridCell },
};

export function Default() {
  return (
    <Grid>
      <GridCell>
        <div className="color-box">One</div>
      </GridCell>
      <GridCell>
        <div className="color-box">Two</div>
      </GridCell>
      <GridCell>
        <div className="color-box">Three</div>
      </GridCell>
      <GridCell>
        <div className="color-box">Four</div>
      </GridCell>
      <GridCell>
        <div className="color-box">Five</div>
      </GridCell>
    </Grid>
  );
}

export function Configurable() {
  const directionLabel = 'direction';
  const directionOptions = ['row', 'column'];
  const directionDefaultValue = 'row';

  const direction = select(
    directionLabel,
    directionOptions,
    directionDefaultValue
  );

  const guttersLabel = 'gutters';
  const guttersOptions = [false, 'tiny', 'small', 'medium', 'large'];
  const guttersDefaultValue = 'medium';

  const gutters = select(guttersLabel, guttersOptions, guttersDefaultValue);

  return (
    <div style={ { height: '100vh', width: '100wh' } } >
      <Grid direction={ direction } gutters={ gutters }>
        <GridCell>
          <div className="color-box">One</div>
        </GridCell>
        <GridCell>
          <div className="color-box">Two</div>
        </GridCell>
        <GridCell>
          <div className="color-box">Three</div>
        </GridCell>
        <GridCell>
          <div className="color-box">Four</div>
        </GridCell>
        <GridCell>
          <div className="color-box">Five</div>
        </GridCell>
      </Grid>
    </div>
  );
}

Configurable.story = { parameters: { docs: { disable: true } } };

export function CardRow() {
  return (
    <Grid horizontalAlign="around">
      <GridCell>
        <div className="color-box">
          This card has a lot more content which means that it defines the
          height of the container both the cards are in.
        </div>
      </GridCell>
      <GridCell>
        <div className="color-box" style={ { height: '100%' } }>
          This card doesn't have much content.
        </div>
      </GridCell>
    </Grid>
  );
}

export function FormControlFill() {
  return (
    <Grid gutters={ false }>
      <GridCell fill>
        <TextInput type="text" />
      </GridCell>
      <GridCell shrink>
        <Button type="submit" value="Send">
          Send
        </Button>
      </GridCell>
    </Grid>
  );
}
