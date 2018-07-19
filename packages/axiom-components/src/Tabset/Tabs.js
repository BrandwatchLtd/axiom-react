import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Tabset.css';

export default class Tabs extends Component {
  static propTypes = {
    /** Tabs */
    children: PropTypes.node,
    /** Size control for the Tabs */
    size: PropTypes.oneOf(['medium', 'large']),
    /** Vertical spacing between elements */
    space: PropTypes.string,
  };

  static defaultProps = {
    size: 'medium',
    space: 'x6',
  };

  render() {
    const { children, size, space, ...rest } = this.props;
    const classes = classnames('ax-tabset__list', `ax-tabset__list--${size}`);

    return (
      <Base space={ space } { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
