import React, { Component } from 'react';
import ButtonGroup from '../button/ButtonGroup';

export default class PaginationButtonGroup extends Component {
  render() {
    return (
      <ButtonGroup { ...this.props } textCenter />
    );
  }
}
