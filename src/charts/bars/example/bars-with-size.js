import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Bars,
  Bar,
  Grid,
  GridCell,
  Heading,
} from 'bw-axiom';
import { data, labels } from './data';

export default class BarsExample extends Component {
  render() {
    return (
      <Example name="Bars with a specific size">
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell snippetIgnore={ true }>
              <Heading snippetIgnore={ true }>Direction: Up</Heading>
              <Grid snippetIgnore={ true }>
                { data.map(({ data }, index) =>
                  <GridCell key={ index } snippetIgnore={ true } snippetSkip={ index > 0 }>
                    <div snippetIgnore={ true } style={ { height: '10rem' } }>
                      <Bars direction="up">
                        <Bar
                            color={ labels[0].color }
                            percent={ data[0] }
                            showLabel={ true }
                            size="0.75rem" />
                      </Bars>
                    </div>
                  </GridCell>
                ) }
              </Grid>
            </GridCell>

            <GridCell snippetSkip={ true }>
              <Heading>Direction: Down</Heading>
              <Grid>
                { data.map(({ data }, index) =>
                  <GridCell key={ index }>
                    <div style={ { height: '10rem' } }>
                      <Bars direction="down">
                        <Bar
                            color={ labels[0].color }
                            percent={ data[0] }
                            showLabel={ true }
                            size="0.75rem" />
                      </Bars>
                    </div>
                  </GridCell>
                ) }
              </Grid>
            </GridCell>
          </Grid>

          <Grid snippetSkip={ true }>
            <GridCell>
              <Heading>Direction: Left</Heading>
              { data.map(({ data }, index) =>
                <Bars direction="left" key={ index }>
                  <Bar
                      color={ labels[0].color }
                      percent={ data[0] }
                      showLabel={ true }
                      size="0.75rem" />
                </Bars>
              ) }
            </GridCell>

            <GridCell>
              <Heading>Direction: Right</Heading>
              { data.map(({ data }, index) =>
                <Bars direction="right" key={ index }>
                  <Bar
                      color={ labels[0].color }
                      percent={ data[0] }
                      showLabel={ true }
                      size="0.75rem" />
                </Bars>
              ) }
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
