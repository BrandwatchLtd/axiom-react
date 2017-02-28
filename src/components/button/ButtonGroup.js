import React, { Component, PropTypes } from 'react';
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
    const { children, joined, ...rest } = this.props;
    const classes = classnames('ax-button-group', {
      'ax-button-group--joined': joined,
    });

    return (
      <Base space="medium" { ...rest } className="ax-button-group__container">
        <div className={ classes }>
          { children }
        </div>
      </Base>
    );
  }
}
