import React, { Component } from 'react';
import ContextContent from '../Context/ContextContent';

export default class TooltipContent extends Component {
  render() {
    return (
      <ContextContent { ...this.props } padding="small" />
    );
  }
}
