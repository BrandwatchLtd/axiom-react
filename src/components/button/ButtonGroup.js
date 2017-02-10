import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ButtonGroup.scss');
}

export default class ButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    joined: PropTypes.bool,
  };

  static childContextTypes = {
    joined: PropTypes.bool,
  };

  getChildContext() {
    return {
      joined: this.props.joined,
    };
  }

  render() {
    const { children, ...rest } = this.props;
    const classes = classnames('ax-button__group');

    return (
      <Base { ...omit(rest, ['joined']) } className={ classes }>
        { children }
      </Base>
    );
  }
}
