import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

export class DialogHeader extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
    onRequestClose: { func: true, isRequired: true },
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
              <Icon name="times" size="medium" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}

export default enhance(DialogHeader)(addPropTypes());
