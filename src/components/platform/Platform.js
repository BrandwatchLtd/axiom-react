import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import './Platform.css';

export default class Platform extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    consoleWidth: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      consoleWidth: this.props.consoleWidth,
    };
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...omit(rest, ['consoleWidth']) } className="ax-platform">
        { children }
      </div>
    );
  }
}
