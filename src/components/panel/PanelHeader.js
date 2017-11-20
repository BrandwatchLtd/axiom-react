import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class PanelHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-panel__header">
        { children }
      </Base>
    );
  }
}
