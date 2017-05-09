import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Bars, Bar, Grid, GridCell } from 'bw-axiom';
import { data, labels } from './data';

export default class BarsExample extends Component {
  render() {
    return (
      <Example name="Horizontal Bars">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              { data.map(({ data }, index) =>
                <Bars
                    direction="left"
                    key={ index }
                    snippetSkip={ index !== 0 }
                    space="small">
                  { data.map((value, index) =>
                    <Bar
                        color={ labels[index].color }
                        key={ index }
                        percent={ value } />
                  ) }
                </Bars>
              ) }
            </GridCell>

            <GridCell snippetIgnore={ true }>
              { data.map(({ data }, index) =>
                <Bars
                    direction="right"
                    key={ index }
                    snippetSkip={ index !== 0 }
                    space="small">
                  { data.map((value, index) =>
                    <Bar
                        color={ labels[index].color }
                        key={ index }
                        percent={ value } />
                  ) }
                </Bars>
              ) }
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
