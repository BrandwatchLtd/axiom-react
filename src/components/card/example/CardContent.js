import React, { Component } from 'react';
import {
  Avatar,
  ButtonGroup,
  Button,
  Grid,
  GridCell,
  Heading,
  Paragraph,
} from 'bw-axiom';


export default class CardContent extends Component {
  render() {
    return (
      <Grid vAlign="middle">
        <GridCell shrink={ true } textCenter="small">
          <Avatar size="5rem" src="assets/avatar.png" />
        </GridCell>

        <GridCell>
          <Heading style="title">Some heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc commodo egestas fringilla. In a arcu erat. Ut vestibulum
            sollicitudin orci, ut blandit ante. Vestibulum tempus rhoncus
            vehicula.
          </Paragraph>
        </GridCell>

        <GridCell shrink={ true }>
          <ButtonGroup>
            <Button
                full="small"
                onClick={ (e) => e.stopPropagation() }
                style="secondary">Button</Button>
          </ButtonGroup>
        </GridCell>
      </Grid>
    );
  }
}
