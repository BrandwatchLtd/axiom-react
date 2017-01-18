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

export default class PositionExample extends Component {
  componentWillMount() {
    this.setState({ isVisble: true });
  }

  render() {
    const { isVisble } = this.state;

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
        </CheckBoxGroup>

        <Snippet>
          <Grid
              hAlign="center"
              responsive={ false }
              snippetIgnore={ true }
              style={ { minHeight: 180 } }
              vAlign="middle">
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Position isVisible={ isVisble } offset="start" position="right">
                <PositionTarget>
                  <Avatar size="4rem" src="assets/avatar.png" />
                </PositionTarget>

                <PositionContent>
                  <ContextBox>Lorem Ipsum</ContextBox>
                </PositionContent>
              </Position>
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
