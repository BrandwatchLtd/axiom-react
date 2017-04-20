import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InlineGroup } from 'bw-axiom';

export default class BadgeGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <InlineGroup space="small" { ...rest } className="ax-badge-group">
        { children }
      </InlineGroup>
    );
  }
}
