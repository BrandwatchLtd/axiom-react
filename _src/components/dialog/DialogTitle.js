import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import CardTitle from '../card/CardTitle';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

export class DialogTitle extends Component {
  static propTypes = {
    children: { string: true, isRequired: true },
    onRequestClose: { func: true, isRequired: true },
  };

  render() {
    const { children, className, onRequestClose, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__card-title');

    return (
      <CardTitle { ...rest } className={ classes } title={ children }>
        <Link onClick={ onRequestClose } supressStyle={ true }>
          <Icon name="times" size="lg" />
        </Link>
      </CardTitle>
    );
  }
}

export default enhance(DialogTitle)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
