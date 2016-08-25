import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./layout__content.scss');
}

export class LayoutContent extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__content">
        { children }
      </div>
    );
  }
}

LayoutContent.propTypes = {
  children: PropTypes.node,
};

export default LayoutContent;
