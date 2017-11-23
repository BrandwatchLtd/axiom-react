import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import './Panels.css';

export default class Panels extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-panels" theme="day">
        { children }
      </Base>
    );
  }
}
