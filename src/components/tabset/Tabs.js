import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './Tabset.css';

export default class Tabs extends Component {
  static propTypes = {
    /** Tabs */
    children: PropTypes.node,
    /** Size control for the Tabs */
    size: PropTypes.oneOf(['medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { children, size, ...rest } = this.props;
    const classes = classnames('ax-tabset__list', `ax-tabset__list--${size}`);

    return (
      <Base space="x6" { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
