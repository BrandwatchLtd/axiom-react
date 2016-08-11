import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import constants from '../../style-guide/_helper/constants';

if (constants.__INCLUDE_CSS__) {
  require('./Layout.scss');
}

export class Layout extends Component {
  render() {
    const { children } = this.props;
    const classes = classnames('dm-layout');

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
