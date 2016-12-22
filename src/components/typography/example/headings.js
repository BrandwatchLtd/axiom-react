import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading, HorizontalRule, Strong, Weak } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Headings">
        <Grid vAlign="middle">
          <GridCell>
            <Heading>Display</Heading>
          </GridCell>

          <GridCell shrink={ true }>
            <Heading style="display">
              <Weak>Weak [ Aa Zz ]</Weak> / Standard [ Aa Zz ]
            </Heading>
          </GridCell>
        </Grid>

        <HorizontalRule />

        <Grid vAlign="middle">
          <GridCell>
            <Heading>Headline</Heading>
          </GridCell>

          <GridCell shrink={ true }>
            <Heading style="headline">
              Standard [ Aa Zz ]
            </Heading>
          </GridCell>
        </Grid>

        <HorizontalRule />

        <Grid vAlign="middle">
          <GridCell>
            <Heading>Title</Heading>
          </GridCell>

          <GridCell shrink={ true }>
            <Heading style="title">
              Standard [ Aa Zz ] / <Strong>Strong [ Aa Zz ]</Strong>
            </Heading>
          </GridCell>
        </Grid>

        <HorizontalRule />

        <Grid vAlign="middle">
          <GridCell>
            <Heading>Large</Heading>
          </GridCell>

          <GridCell shrink={ true }>
            <Heading style="large">
              Standard [ Aa Zz ] / <Strong>Strong [ Aa Zz ]</Strong>
            </Heading>
          </GridCell>
        </Grid>

        <HorizontalRule />

        <Snippet>
          <Heading renderSkip={ true } style="display">... <Weak>...</Weak></Heading>
          <Heading renderSkip={ true } style="headline">...</Heading>
          <Heading renderSkip={ true } style="title">... <Strong>...</Strong></Heading>
          <Heading renderSkip={ true } style="large">... <Strong>...</Strong></Heading>
        </Snippet>
      </Example>
    );
  }
}
