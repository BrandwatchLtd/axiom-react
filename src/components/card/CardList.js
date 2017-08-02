import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './CardList.css';

export default class CardList extends Component {
  static propTypes = {
    /** Cards to display in the list */
    children: PropTypes.node.isRequired,
    /** A compact list for smaller areas in an application */
    compact: PropTypes.bool,
    /** Separators inserted between cards */
    separators: PropTypes.bool,
    /** Size of the Cards */
    size: PropTypes.oneOf(['medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { children, compact, separators, size, ...rest } = this.props;
    const classes = classnames('ax-card-list', `ax-card-list--${size}`, {
      'ax-card-list--compact': compact,
      'ax-card-list--separators': separators,
    });

    return (
      <Base { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
