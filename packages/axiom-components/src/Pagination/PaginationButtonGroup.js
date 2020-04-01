import React, { Component } from 'react';
import ButtonGroup from '../Button/ButtonGroup';

export default class PaginationButtonGroup extends Component {
  render() {
    return <ButtonGroup {...this.props} textCenter />;
  }
}
