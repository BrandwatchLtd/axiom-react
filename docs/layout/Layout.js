import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export class Layout extends Component {
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

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
