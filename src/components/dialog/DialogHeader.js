import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Grid, GridCell, IconLink  } from 'bw-axiom';

export default class DialogHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { children, className, onRequestClose, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__header');

    return (
      <Base { ...rest } className={ classes }>
        <Grid responsive={ false }>
          <GridCell>
            { children }
          </GridCell>

          <GridCell shrink={ true }>
            <IconLink name="cross" onClick={ onRequestClose } />
          </GridCell>
        </Grid>
      </Base>
    );
  }
}
