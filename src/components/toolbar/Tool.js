import React, { PropTypes, Component } from 'react';
import { Grid, GridCell, Icon, Link, ListItem } from 'bw-axiom';

export default class Tool extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
  }

  render() {
    const { children, icon, ...rest } = this.props;

    return (
      <ListItem { ...rest }>
        <Link style="subtle">
          <Grid
              horizontalGutters="tiny"
              verticalAlign="middle"
              verticalGutters={ false }>
            <GridCell>
              { children }
            </GridCell>
            { icon && (
              <GridCell shrink={ true }>
                <Icon name={ icon } />
              </GridCell>
            )}
          </Grid>
        </Link>
      </ListItem>
    );
  }
}
