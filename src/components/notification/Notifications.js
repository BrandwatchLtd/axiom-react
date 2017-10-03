import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import Base from '../base/Base';
import Portal from '../portal/Portal';

export default class Notifications extends Component {
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
