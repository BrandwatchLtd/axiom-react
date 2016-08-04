import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { LogoVertical } from '../../';
import LayoutContent from './LayoutContent';

export class LayoutTitle extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout--emblem__title-container');

    return (
      <div className={ classes }>
        <LayoutContent>
          <div className="ax-layout--emblem__logo">
            <LogoVertical size="sm" />
          </div>

          <div className="ax-layout--emblem__title">
            { children }
          </div>
        </LayoutContent>
      </div>
    );
  }
}

export default enhance(LayoutTitle)(
  addPropTypes('global'),
  addClassName('global'),
);
