import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Heading, Icon, Paragraph } from 'bw-axiom';

export default class IconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Icon: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render () {
    const { components } = this.props;
    const { Icon: { size } } = components;

    return (
      <Example name="Icons sizes">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { size.values.map((size) =>
              <GridCell key={ size } shrink={ true } snippetIgnore={ true }>
                <Icon name="twitter" size={ size } />
                <Paragraph snippetIgnore={ true }>
                  { size }
                </Paragraph>
              </GridCell>
            ) }
          </Grid>
        </Snippet>

        <Heading>Custom Pixel Size</Heading>
        <Snippet>
          <Grid snippetIgnore={ true }>
            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" sizePx={ 24 } />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" sizePx={ 36 } />
            </GridCell>

            <GridCell shrink={ true } snippetIgnore={ true }>
              <Icon name="twitter" sizePx={ 50 } />
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
