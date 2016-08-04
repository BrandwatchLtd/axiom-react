import React, { Component } from 'react';
import classnames from 'classnames';
import { CardTitle } from '../Card';
import { Icon } from '../Icon';
import { Link } from '../Typography';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class DialogTitle extends Component {
  static propTypes = {
    children: { string: true, isRequired: true },
    onRequestClose: { func: true, isRequired: true },
  };

  render() {
    const { children, className, onRequestClose } = this.props;
    const classes = classnames(className, 'ax-dialog__card-title');

    return (
      <CardTitle className={ classes } title={ children }>
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
