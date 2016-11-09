import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./List.scss');
}

export class List extends Component {
  static propTypes = {
    aligned: { bool: true },
    children: { node: true },
    inline: { bool: true },
    ordered: { bool: true },
  };

  render() {
    const {
      className,
      children,
      ordered,
      inline,
      aligned = !inline,
      ...rest
    } = this.props;

    const tag = ordered ? 'ol' : 'ul';
    const classes = classnames(className,
      'ax-list', {
        'ax-list--aligned': aligned === true,
        'ax-list--inline': inline === true,
      }
    );

    return (
      <Base { ...rest } Component={ tag } className={ classes }>
        { children }
      </Base>
    );
  }
}

export default enhance(List)(addPropTypes());
