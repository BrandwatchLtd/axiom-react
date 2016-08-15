import React, { Component, PropTypes } from 'react';

export class LayoutMain extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

LayoutMain.propTypes = {
  children: PropTypes.node,
};

export default LayoutMain;
