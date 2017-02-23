import React, { Component, PropTypes } from 'react';
import { Example } from 'style-guide';
import { Grid, GridCell, Icon, Paragraph } from 'bw-axiom';

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
        <Grid>
          { name.values.map((name) =>
            <GridCell key={ name } width={ 25 }>
              <Grid gutters="small" responsive={ false } vAlign="middle">
                <GridCell shrink={ true }>
                  <Icon name={ name } size="1.5rem" />
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
