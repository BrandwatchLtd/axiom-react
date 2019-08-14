import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import Base from '../Base/Base';
import Portal from '../Portal/Portal';

export default class Notifications extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;
    const isRendered = Boolean(Array.isArray(children)
      ? children.length
      : children);

    if (!isRendered) {
      return null;
    }

    return (
      <Portal>
        <Base { ...rest } className="ax-notifications">
          { Children.map(children, (child) =>
            <div className="ax-notifications__notification">
              { child }
            </div>
          ) }
        </Base>
      </Portal>
    );
  }
}
