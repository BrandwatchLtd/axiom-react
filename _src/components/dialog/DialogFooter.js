import React, { Component } from 'react';
import classnames from 'classnames';
import CardFooter from '../card/CardFooter';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class DialogFooter extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames(className, 'ax-dialog__card-footer');

    return (
      <CardFooter { ...rest } className={ classes }>
        { children }
      </CardFooter>
    );
  }
}

export default enhance(DialogFooter)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
