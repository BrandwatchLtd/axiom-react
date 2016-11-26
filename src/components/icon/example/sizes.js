import React, { Component, PropTypes } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../Icon';
import Paragraph from '../../typography/Paragraph';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
