import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Small.scss');
}

export default class Small extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames('ax-small', className);

    return (
      <Base { ...rest } Component="small" className={ classes }>
        { children }
      </Base>
    );
  }
}
