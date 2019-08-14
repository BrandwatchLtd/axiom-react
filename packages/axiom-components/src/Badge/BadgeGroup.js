import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InlineGroup from '../InlineGroup/InlineGroup';

export default class BadgeGroup extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
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
