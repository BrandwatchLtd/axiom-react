import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert, Grid, GridCell, IconIndicator, ProgressInfinite } from 'bw-axiom';

export default class AlertExample extends Component {
  render() {
    return (
      <Example name="With an IconIndicator or Progress">
        <Snippet>
          <Alert color="error">
            <Grid gutters="small" vAlign="middle">
              <GridCell shrink={ true }>
                <IconIndicator color="subtle" name="warning" />
              </GridCell>

              <GridCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
                accumsan quam, ut ullamcorper nulla.
              </GridCell>
            </Grid>
          </Alert>

          <Alert>
            <Grid gutters="small" vAlign="middle">
              <GridCell shrink={ true }>
                <ProgressInfinite color="white" />
              </GridCell>

              <GridCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
                accumsan quam, ut ullamcorper nulla.
              </GridCell>
            </Grid>
          </Alert>
        </Snippet>
      </Example>
    );
  }
}
