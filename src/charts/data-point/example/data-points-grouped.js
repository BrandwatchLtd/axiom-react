import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { DataPoint, DataPoints } from 'bw-axiom';

export default class DataPointExample extends Component {
  render() {
    return (
      <Example name="DataPoints grouped">
        <Snippet>
          <DataPoints height="1.5rem" type="grouped">
            <DataPoint color="blue" />
            <DataPoint color="pink" />
            <DataPoint color="amber" />
          </DataPoints>
        </Snippet>
      </Example>
    );
  }
}

