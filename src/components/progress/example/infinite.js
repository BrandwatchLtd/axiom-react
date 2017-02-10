import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ProgressInfinite } from 'bw-axiom';

export default class InfiniteProgressExample extends Component {

  render() {
    return (
      <Example name="Infinite progress">
        <Snippet>
          <ProgressInfinite />
        </Snippet>
      </Example>
    );
  }
}
