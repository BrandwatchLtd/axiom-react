import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, InlineGroup } from 'bw-axiom';

export default class ButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    joined: PropTypes.bool,
  };

  static defaultProps = {
    space: 'medium',
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
    const { children, joined, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component={ joined ? 'div' : InlineGroup }
          className="ax-button-group">
        { children }
      </Base>
    );
  }
}



