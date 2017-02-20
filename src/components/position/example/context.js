import React, { Component } from 'react';
import { Example, Snippet, Link } from 'style-guide';
import {
  Avatar,
  CheckBox,
  CheckBoxGroup,
  ContextBox,
  Grid,
  GridCell,
  Paragraph,
  Position,
  PositionContent,
  PositionTarget,
} from 'bw-axiom';

import { placementToPosition } from '../_utils';

const placements = [
  'top-end',
  'top-middle',
  'top-start',
  'right-end',
  'right-middle',
  'right-start',
  'bottom-start',
  'bottom-middle',
  'bottom-end',
  'left-start',
  'left-middle',
  'left-end',
];

export default class PositionExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisble: true,
      isRotating: false,
      placement: placements[0],
    };
  }

  componentWillUpdate(props, nextState) {
    const { isRotating } = this.state;
    const { isRotating: nextIsRotating } = nextState;

    if (isRotating !== nextIsRotating) {
      if (nextIsRotating) {
        this.startRotating();
      } else {
        this.stopRotating();
      }
    }
  }

  componentWillUnmount() {
    this.stopRotating();
  }

  startRotating() {
    const { isRotating } = this.state;

    if (!isRotating) {
      this.rotateInterval = setInterval(() => {
        const { placement } = this.state;

        this.setState({
          placement: placements[
            (placements.indexOf(placement) + 1 + placements.length) % placements.length
          ],
        });
      }, 1000);
    }
  }

  stopRotating() {
    clearInterval(this.rotateInterval);
  }

  render() {
    const { isVisble, isRotating, placement } = this.state;
    const [position, offset] = placementToPosition(placement);

    return (
      <Example name="ContextBox example">
        <Paragraph>
          The Position component uses
          the <Link href="https://github.com/FezVrasta/popper.js">PopperJS</Link>
          positioning engine to position the PositionContent around the PositionTarget.
          The content passed to PositionTarget is the only element that will be
          rendered inline.
        </Paragraph>

        <Paragraph>
          The Component that is passed into PositionContent will recieve two
          properties, "position" and "offset", similar to what
          the <Link to="/components/context">Context components</Link> expect.
        </Paragraph>

        <CheckBoxGroup>
          <CheckBox
              checked={ isVisble }
              onChange={ () => this.setState({ isVisble: !isVisble }) }>
            Toggle visible
          </CheckBox>

          <CheckBox
              checked={ isRotating }
              onChange={ () => this.setState({ isRotating: !isRotating }) }>
            Rotate placements
          </CheckBox>
        </CheckBoxGroup>

        <Snippet>
          <Grid
              hAlign="middle"
              responsive={ false }
              snippetIgnore={ true }
              style={ { minHeight: 180 } }
              vAlign="middle">
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Position isVisible={ isVisble } offset={ offset } position={ position }>
                <PositionTarget>
                  <Avatar size="4rem" src="assets/avatar.png" />
                </PositionTarget>

                <PositionContent>
                  <ContextBox>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at velit ut nisl eleifend volutpat.
                  </ContextBox>
                </PositionContent>
              </Position>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
