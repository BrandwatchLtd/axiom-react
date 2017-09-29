import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Paragraph from '../../components/typography/Paragraph';
import Small from '../../components/typography/Small';

export default class ChartTableAxisTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Paragraph { ...rest } textCenter textColor="subtle">
        <Small>{ children }</Small>
      </Paragraph>
    );
  }
}
