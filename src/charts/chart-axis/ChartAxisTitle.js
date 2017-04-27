import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Small } from 'bw-axiom';

export default class ChartAxisTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } textCenter={ true } textColor="subtle">
        <Small>{ children }</Small>
      </Base>
    );
  }
}
