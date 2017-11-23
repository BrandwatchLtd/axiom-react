import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './Panel.css';

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Sets inactive styling on the Panel. */
    isInactive: PropTypes.bool,
    /** Sets a minimum height on the Panel. */
    minimumHeight: PropTypes.string,
  };

  static defaultProps = {
    isInactive: false,
  };

  render() {
    const { children, isInactive, minimumHeight, ...rest } = this.props;
    const classes = classnames('ax-panel', {
      'ax-panel--inactive': isInactive,
    });

    return (
      <Base { ...rest }
          className={ classes }
          style={ { minHeight: minimumHeight } }
          theme="day">
        { children }
      </Base>
    );
  }
}
