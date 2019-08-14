import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class DockHeader extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ul { ...rest } className="ax-dock__list-header">
        { children }
      </ul>
    );
  }
}
