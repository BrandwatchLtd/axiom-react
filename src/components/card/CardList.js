import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class CardList extends Component {
  static propTypes = {
    /** Cards to be inserted in the CardList */
    children: PropTypes.node.isRequired,
    /** Style of the list */
    style: PropTypes.oneOf(['divided', 'seamless', 'separate']),
  };

  static defaultProps = {
    style: 'separate',
  };

  static childContextTypes = {
    cardListStyle: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      cardListStyle: this.props.style,
    };
  }

  render() {
    const { children, style, ...rest } = this.props;
    const classes = classnames('ax-card-list',
      `ax-card-list--${style}`,
    );

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
