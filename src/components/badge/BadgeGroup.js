import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InlineGroup } from 'bw-axiom';

export default class BadgeGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    space: 'small',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <InlineGroup { ...rest } className="ax-badge-group">
        { children }
      </InlineGroup>
    );
  }
}
