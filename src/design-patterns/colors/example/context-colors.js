import React, { Component } from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import { colorAliases } from '../../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
import Example from 'style-guide/components/Example/Example';

export default class ContextColors extends Component {
  render() {
    return (
      <Example name="Context Colors">
        { colorAliases.map(({ heading, colors }, t) => [
          <Heading key={ t } level={ 5 }>{ heading }</Heading>,
          colors.map((group, m) =>
            <Grid key={ `${t}${m}` }>
              { group.map(({ name, color }, b) =>
                <GridCell key={ `${t}${m}${b}` }>
                  <ColorSwatch color={ color } name={ name } />
                </GridCell>
              ) }
            </Grid>
          ),
        ]) }
      </Example>
    );
  }
}
