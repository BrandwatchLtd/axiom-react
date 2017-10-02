import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../../components/base/Base';
import './StatusMessage.css';

export default class StatusMessage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-status-message" textCenter>
        { children }
      </Base>
    );
  }
}
