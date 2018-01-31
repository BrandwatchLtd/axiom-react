import React, { Component } from 'react';
import ContextContent from '../Context/ContextContent';

export default class DropdownContent extends Component {
  render() {
    return (
      <ContextContent { ...this.props } />
    );
  }
}
