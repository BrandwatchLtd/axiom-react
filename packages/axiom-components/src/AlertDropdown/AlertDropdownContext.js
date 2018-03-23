import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

export default class AlertDropdownContext extends Component {
  static contextTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };

  render() {
    return (
      <Context { ...this.props } color={ this.context.type } />
    );
  }
}
