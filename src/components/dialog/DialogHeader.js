import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Grid, GridCell, Icon, Link  } from 'bw-axiom';

export default class DialogHeader extends Component {
  static propTypes = {
    /** Header content inside the Dialog, a good place for a title */
    children: PropTypes.node,
    /** Handler attached to the close button inside the header */
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
