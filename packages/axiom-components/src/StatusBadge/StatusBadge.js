import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
import './StatusBadge.css';

const BADGE_MAP = {
  alpha: require('./svgs/alpha.svg'),
  beta: require('./svgs/beta.svg'),
  internal: require('./svgs/internal.svg'),
  new: require('./svgs/new.svg'),
  prototype: require('./svgs/prototype.svg'),
};

export default class StatusBadge extends Component {
  static propTypes = {
    /** Type of status the badge should display (determines wording and colouring) */
    status: PropTypes.oneOf(['alpha', 'beta', 'internal', 'new', 'prototype'])
      .isRequired,
  };

  render() {
    const { status, ...rest } = this.props;
    const { body, height, viewBox, width } = BADGE_MAP[status];

    return (
      <Base
        {...rest}
        Component="svg"
        className="ax-status-badge"
        dangerouslySetInnerHTML={{ __html: body }}
        height={height}
        viewBox={viewBox}
        width={width}
      />
    );
  }
}
