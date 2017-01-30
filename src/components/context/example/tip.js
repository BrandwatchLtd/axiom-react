import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ContextTip, Paragraph } from 'bw-axiom';

export default class ContextTipExample extends Component {
  render() {
    return (
      <Example name="Tip">
        <Snippet>
          <ContextTip position="top">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis at velit ut nisl eleifend volutpat.
            </Paragraph>
          </ContextTip>
        </Snippet>
      </Example>
    );
  }
}
