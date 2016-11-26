import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

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
            <Link onClick={ onRequestClose } supressStyle={ true }>
              <Icon name="cross" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}
