import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import ContextContent from './ContextContent';

export default class ContextMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
    paddingVertical: PropTypes.oneOf(['none', 'medium']),
  };

  static defaultProps = {
    hasFullSeparator: false,
    paddingVertical: 'medium',
  };

  render() {
    const { children, paddingVertical, ...rest } = this.props;

    const classes = classnames(
      'ax-context-menu',
      `ax-context-menu--padding-vertical-${paddingVertical}`,
    );

    return (
      <ContextContent { ...rest } padding="none">
        <div className={ classes }>
          { children }
        </div>
      </ContextContent>
    );
  }
}
