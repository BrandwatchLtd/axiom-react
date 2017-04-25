import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Context, ContextTip, Grid, GridCell, Paragraph } from 'bw-axiom';

export default class ContextExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Context: PropTypes.shape({
        theme: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Context: { theme } } = components;

    return (
      <Example name="Theme">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { theme.values.map((theme) =>
              <GridCell key={ theme } shrink={ true } snippetIgnore={ true }>
                <Context theme={ theme }>
                  <ContextTip snippetSkip={ true }>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis at velit ut nisl eleifend volutpat.
                    </Paragraph>
                  </ContextTip>
                </Context>
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
