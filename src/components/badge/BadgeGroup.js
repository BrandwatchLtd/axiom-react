import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InlineGroup from '../layout/InlineGroup';

export default class BadgeGroup extends Component {
  static propTypes = {
    /** Badges inside the group */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <InlineGroup space="x4" { ...rest } className="ax-badge-group">
        { children }
      </InlineGroup>
    );
  }
}
