import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList, Grid, GridCell, Heading } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  render() {
    return (
      <Example name="List of Cards with separators">
        <Heading space="none" style="headline" underline={ true }>
          Medium list of cards
        </Heading>

        <Snippet>
          <Grid space="none" vGutters={ false }>
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
