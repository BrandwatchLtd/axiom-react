import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chedio-buttox-group">
        { children }
      </Base>
    );
  }
}
