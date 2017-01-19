import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import {
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
        offset: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        position: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { ContextBox: { offset, position } } = components;

    return (
      <Example name="Positions">
        <Snippet>
          { position.values.map((position) =>
            <Grid
                fit="medium"
                full={ true }
                gutters="large"
                key={ position }
                snippetIgnore={ true }>
              { offset.values.map((offset) =>
                <GridCell key={ offset } snippetIgnore={ true }>
                  <ContextBox offset={ offset } position={ position }>
                    <div snippetReplace={ true }>
                      <Heading style="title">Lorem Ipsum</Heading>
                      <Paragraph>
                        Quisque id hendrerit dolor. In congue vulputate mi, et
                        accumsan magna tristique id.
                      </Paragraph>

                      <LabelGroup textCase="capital">
                        <Label color="valid">Postion: { position }</Label>
                        <Label color="invalid">Offset: { offset }</Label>
                      </LabelGroup>
                    </div>
                  </ContextBox>
                </GridCell>
              ) }
            </Grid>
          ) }
        </Snippet>
      </Example>
    );
  }
}
