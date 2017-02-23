import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  ContextBox,
  Grid,
  GridCell,
  Heading,
  LabelGroup,
  Label,
  Paragraph,
} from 'bw-axiom';

export default class ContextBoxExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ContextBox: PropTypes.shape({
        position: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { ContextBox: { position } } = components;

    return (
      <Example name="Positions">
        <Snippet>
          <Grid
              fit="medium"
              full={ true }
              gutters="large"
              snippetIgnore={ true }>
            { position.values.map((position) =>
              <GridCell key={ position } snippetIgnore={ true }>
                <Context position={ position } width="100%">
                  <ContextBox>
                    <div snippetReplace={ true }>
                      <Heading style="title">Lorem Ipsum</Heading>
                      <Paragraph>
                        Quisque id hendrerit dolor. In congue vulputate mi, et
                        accumsan magna tristique id.
                      </Paragraph>

                      <LabelGroup textCase="capital">
                        <Label color="success">Postion: { position }</Label>
                      </LabelGroup>
                    </div>
                  </ContextBox>
                </Context>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
