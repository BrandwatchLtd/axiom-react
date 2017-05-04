import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Axis, AxisLabel } from 'bw-axiom';
import { sampleLabels } from './labels';

export default class AxisExample extends Component {
  render() {
    return (
      <Example name="Axis Labels">
        <Snippet>
          <Axis>
            {
              sampleLabels.map((label, index) =>
                <AxisLabel key={ index }
                    mainLabel={ label.mainLabel } secondLabel={ label.secondLabel }>
                </AxisLabel>)
            }
          </Axis>
        </Snippet>
      </Example>
    );
  }
}