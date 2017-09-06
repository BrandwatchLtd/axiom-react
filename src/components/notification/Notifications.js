import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { Base, Subtree  } from 'bw-axiom';

export default class Notifications extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.subtree = this.subtree.bind(this);
  }

  subtree() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-notifications">
        { Children.map(children, (child) =>
          <div className="ax-notifications__notification">
            { child }
          </div>
        ) }
      </Base>
    );
  }

  render() {
    const { children } = this.props;
    const isRendered = Boolean(Array.isArray(children)
      ? children.length
      : children);

    return (
      <Subtree
          isRendered={ isRendered }
          subtree={ this.subtree } />
    );
  }
}
