import React, { Component, PropTypes } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../Icon';
import Paragraph from '../../typography/Paragraph';
import Example from 'style-guide/components/Example/Example';

export default class IconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Icon: PropTypes.shape({
        name: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render () {
    const { components } = this.props;
    const { Icon: { name } } = components;

    return (
      <Example name="Icons">
        <Grid snippetIgnore={ true }>
          { name.values.map((name) =>
            <GridCell key={ name }  snippetIgnore={ true } width={ 25 }>
              <Grid responsive={ false }>
                <GridCell shrink={ true }>
                  <Icon name={ name } />
                </GridCell>

                <GridCell>
                  <Paragraph textEllipsis={ true }>{ name }</Paragraph>
                </GridCell>
              </Grid>
            </GridCell>
          ) }
        </Grid>
      </Example>
    );
  }
}
