import React, { Component, PropTypes } from 'react';

export class LayoutContent extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

LayoutContent.propTypes = {
  children: PropTypes.node,
};

export default LayoutContent;
