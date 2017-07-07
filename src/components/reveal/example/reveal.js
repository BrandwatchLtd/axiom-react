import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  ButtonGroup,
  Button,
  Candytar,
  CardList,
  Card,
  Grid,
  GridCell,
  Heading,
  Paragraph,
  Reveal,
} from 'bw-axiom';

export default class TableExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleOnClick() {
    const { visible } = this.state;

    this.setState({ visible: !visible });
  }

  render() {
    const { visible } = this.state;

    return (
      <Example name="Reveal">
        <ButtonGroup space="none">
          <Button onClick={ () => this.handleOnClick() } style="secondary">
            Toggle visibility: { visible ? 'OFF' : 'ON' }
          </Button>
        </ButtonGroup>


        <CardList size="large">
          <Card active={ visible } onClick={ () => this.handleOnClick() }>
            <Grid
                gutters="large"
                responsive={ false }
                space={ visible ? 'medium' : 'none' }
                verticalAlign="middle">
              <GridCell shrink={ true }>
                <Candytar color="lilac" size="4.5rem" />
              </GridCell>

              <GridCell>
                <Heading textSize="headtitle">Reveal content below</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc commodo egestas fringilla. In a arcu erat. Ut vestibulum
                  sollicitudin orci, ut blandit ante. Vestibulum tempus rhoncus
                  vehicula.
                </Paragraph>
              </GridCell>
            </Grid>

            <Reveal space="large" visible={ visible }>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ornare sit amet odio at scelerisque. Vestibulum
                consectetur, erat id pretium elementum, felis est
                fermentum velit, a auctor ante purus nec metus. Morbi
                egestas velit odio, eu rhoncus lorem ultrices in. Nam
                ultrices massa neque, non egestas ante mattis nec. Sed
                nec arcu arcu. Sed vehicula faucibus faucibus.
              </Paragraph>

              <ButtonGroup>
                <Button onClick={ () => this.handleOnClick() } style="secondary">
                  Toggle visibility: { visible ? 'OFF' : 'ON' }
                </Button>
              </ButtonGroup>
            </Reveal>
          </Card>
        </CardList>

        <Snippet renderSkip={ true } space="none">
          <Reveal visible={ visible }>
            ...
          </Reveal>
        </Snippet>
      </Example>
    );
  }
}
