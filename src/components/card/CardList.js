import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './CardList.css';

export default class CardList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    compact: PropTypes.bool,
    separators: PropTypes.bool,
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
