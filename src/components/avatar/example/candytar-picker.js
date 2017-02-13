import React, { Component } from 'react';
import { Example, CodeSnippet } from 'style-guide';
import { Candytar, Grid, GridCell, Paragraph } from 'bw-axiom';

export default class AvatarExample extends Component {
  render() {
    return (
      <Example name="Candytar Picker Function">
        <Paragraph>
          By default, if no color is provided it will randomly pick a color
          from the available options.
        </Paragraph>

        <Grid>
          <GridCell shrink={ true }>
            <Candytar size="3rem" />
          </GridCell>
          <GridCell shrink={ true }>
            <Candytar size="3rem" />
          </GridCell>
          <GridCell shrink={ true }>
            <Candytar size="3rem" />
          </GridCell>
          <GridCell shrink={ true }>
            <Candytar size="3rem" />
          </GridCell>
          <GridCell shrink={ true }>
            <Candytar size="3rem" />
          </GridCell>
        </Grid>

        <Paragraph>
          This can be customised by passing in a picker function.
        </Paragraph>

        <CodeSnippet language="js">{`
          function yourCustomPickerFn(colors) {
            return colors[Number];
          }
        `}</CodeSnippet>

        <CodeSnippet language="jsx">{`
          <Candytar picker={ yourCustomPickerFn } />
        `}</CodeSnippet>

      </Example>
    );
  }
}
