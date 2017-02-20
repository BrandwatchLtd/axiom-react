import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./CardList.scss');
}

export default class CardList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    separators: PropTypes.bool,
  };

  render() {
    const { children, separators, ...rest } = this.props;
    const classes = classnames('ax-card-list', {
      'ax-card-list--separators': separators,
    });

    return (
      <Base { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
