import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class LayoutMain extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    hideSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { hideSidebar } = this.context;
    const classes = classnames(className, 'dm-layout__main');

    return (
      <div className={ classes } onClick={ hideSidebar }>
        { children }
      </div>
    );
  }
}
