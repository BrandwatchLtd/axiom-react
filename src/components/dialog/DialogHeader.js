import React, { Component, PropTypes } from 'react';
import { Base, Grid, GridCell, Icon, Link  } from 'bw-axiom';

export default class DialogHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { children, onRequestClose, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-dialog__header">
        <Grid responsive={ false }>
          <GridCell>
            { children }
          </GridCell>

          <GridCell shrink={ true }>
            <Link onClick={ onRequestClose } style="subtle">
              <Icon name="cross" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}
