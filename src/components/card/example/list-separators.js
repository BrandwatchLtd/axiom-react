import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList, Grid, GridCell, Heading, Strong } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  render() {
    return (
      <Example name="List of Cards with separators">
        <Heading space="x0" textSize="headline" textUnderline={ true }>
          <Strong>Medium list of cards</Strong>
        </Heading>

        <Snippet>
          <Grid space="none" verticalGutters={ false }>
            <GridCell>
              <CardList separators={ true }>
                <Card>
                  <CardContent snippetReplace={ true }  />
                </Card>

                <Card>
                  <CardContent snippetReplace={ true }  />
                </Card>
              </CardList>
            </GridCell>

            <GridCell>
              <CardList separators={ true }>
                <Card>
                  <CardContent snippetReplace={ true }  />
                </Card>

                <Card>
                  <CardContent snippetReplace={ true }  />
                </Card>
              </CardList>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
