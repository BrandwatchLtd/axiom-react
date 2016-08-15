import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./LayoutContent.scss');
}

export default class LayoutContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    padded: PropTypes.bool,
  };

  render() {
    const { children, className, padded } = this.props;
    const classes = classnames(className, 'dm-layout__content', {
      'dm-layout__content--padded': padded,
    });

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
