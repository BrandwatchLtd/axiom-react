import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Small from '../../typography/Small';
import './GridBlock.css';

export default class DemoBox extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="dm-grid-block">
        <Small textCase="capital" textColor="light">{ children }</Small>
      </div>
    );
  }
}
