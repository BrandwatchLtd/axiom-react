import React, { Component, PropTypes } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../Icon';
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
    queryParams: PropTypes.shape({
      iconId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { components, queryParams } = this.props;
    const { iconId } = queryParams;
    const { Icon: { size } } = components;

    return (
      <Example name="Icon sizes">
        <Snippet>
          <Grid snippetIgnore={ true } vAlign="middle">
            { size.values.map((size) =>
              <GridCell key={ size } shrink={ true } snippetIgnore={ true }>
                <Icon name={ iconId } size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
