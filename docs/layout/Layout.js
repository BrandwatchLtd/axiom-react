import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    const classes = classnames('ax-layout--established');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default Layout;
