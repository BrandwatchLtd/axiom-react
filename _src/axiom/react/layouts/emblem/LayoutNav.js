import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import LayoutContent from './LayoutContent';

export class LayoutNav extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout--emblem__nav-container');

    return (
      <div className={ classes }>
        <LayoutContent>
          <div className="ax-layout--emblem__nav">
            { children }
          </div>
        </LayoutContent>
      </div>
    );
  }
}

export default enhance(LayoutNav)(
  addPropTypes('global'),
  addClassName('global'),
);
