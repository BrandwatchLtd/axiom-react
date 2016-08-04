import React, { Component } from 'react';
import classnames from 'classnames';
import { CardFooter } from '../Card';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class DialogFooter extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-dialog__card-footer');

    return (
      <CardFooter className={ classes }>
        { children }
      </CardFooter>
    );
  }
}

export default enhance(DialogFooter)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
