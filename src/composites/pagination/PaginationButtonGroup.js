import React, { Component } from 'react';
import { ButtonGroup } from 'bw-axiom';

export default class PaginationButtonGroup extends Component {
  render() {
    return (
      <ButtonGroup { ...this.props } textCenter={ true } />
    );
  }
}
