import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Paragraph, Small } from 'bw-axiom';

export default class ChartTableAxisTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Paragraph { ...rest } textCenter={ true } textColor="subtle">
        <Small>{ children }</Small>
      </Paragraph>
    );
  }
}
