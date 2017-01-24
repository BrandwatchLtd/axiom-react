import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Alert } from 'bw-axiom';

export default class AlertExample extends Component {
  render() {
    return (
      <Example name="Removable Alerts">
        <Snippet>
          <Alert
              color="valid"
              onRemoveClick={ () => {} }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            accumsan quam, ut ullamcorper nulla.
          </Alert>
        </Snippet>
      </Example>
    );
  }
}
