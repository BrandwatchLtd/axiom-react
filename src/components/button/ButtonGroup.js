import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, InlineGroup } from 'bw-axiom';

export default class ButtonGroup extends Component {
  static propTypes = {
    /** Content inserted into the group, ideally Buttons */
    children: PropTypes.node.isRequired,
    /** Whether the child Buttons should be joined */
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
    const { children, joined, ...rest } = this.props;

    return (
      <Base space="x6" { ...rest }
          Component={ joined ? 'div' : InlineGroup }
          className="ax-button-group">
        { children }
      </Base>
    );
  }
}



