import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./LayoutSidebarContent.scss');
}

export default class LayoutSidebarContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'dm-layout__sidebar-content');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
