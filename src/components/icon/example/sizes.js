import React, { Component, PropTypes } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class IconExample extends Component {
  static propTypes = {
    queryParams: PropTypes.shape({
      iconId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { queryParams } = this.props;
    const { iconId } = queryParams;

    return (
      <Example name="Icon sizes">
        <Snippet>
          <Grid snippetIgnore={ true } vAlign="middle">
            { Icon.__ax_propTypes.size.oneOf.map((size, index) =>
              <GridCell key={ index } shrink={ true } snippetIgnore={ true }>
                <Icon name={ iconId } size={ size } />
              </GridCell>
            ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
