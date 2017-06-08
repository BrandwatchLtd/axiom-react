import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Bars, Bar, Grid, GridCell } from 'bw-axiom';
import { data, labels } from './data';

export default class BarsExample extends Component {
  render() {
    return (
      <Example name="Vertical Bars">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { data.map(({ data }, index) =>
              <GridCell key={ index } snippetIgnore={ true }>
                <div snippetIgnore={ true } style={ { height: '10rem' } }>
                  <Bars direction="up" separated={true} snippetSkip={ index !== 0 }>
                    { data.map((value, index) =>
                      <Bar
                          color={ labels[index].color }
                          key={ index }
                          percent={ value } />
                    ) }
                  </Bars>
                </div>
              </GridCell>
            ) }
          </Grid>

          <Grid snippetIgnore={ true }>
            { data.map(({ data }, index) =>
              <GridCell key={ index } snippetIgnore={ true }>
                <div snippetIgnore={ true } style={ { height: '10rem' } }>
                  <Bars direction="down" separated={true} snippetSkip={ index !== 0 }>
                    { data.map((value, index) =>
                      <Bar
                          color={ labels[index].color }
                          key={ index }
                          percent={ value } />
                    ) }
                  </Bars>
                </div>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
