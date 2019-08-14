import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';

export default class Cloak extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
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
