import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

export default class DialogHeader extends Component {
  static propTypes = {
    /** Header content inside the Dialog, a good place for a title */
    children: PropTypes.node,
  };

  static contextTypes = {
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { onRequestClose } = this.context;
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-dialog__header">
        <Grid responsive={ false } verticalAlign="middle">
          <GridCell>
            { children }
          </GridCell>

          <GridCell shrink>
            <Link onClick={ onRequestClose } style="subtle">
              <Icon name="cross" size="1.5rem" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}
