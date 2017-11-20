import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class Cloak extends Component {
  static propTypes = {
    /**
     * Programmatic control over the invisibility of the cloak, as opposed
     * to using the CloakContainer
     */
    invisible: PropTypes.bool,
  };

  render() {
    const { invisible, ...rest } = this.props;

    return (
      <Base cloak={ invisible } { ...rest } />
    );
  }
}
