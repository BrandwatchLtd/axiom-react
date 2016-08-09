import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

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
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-list', {
        'ax-list--aligned': aligned === true,
        'ax-list--inline': inline === true,
      }
    );

    if (ordered === true) {
      return (
        <ol { ...rest } className={ classes }>
          { children }
        </ol>
      );
    }

    return (
      <ul { ...rest } className={ classes }>
        { children }
      </ul>
    );
  }
}

export default enhance(List)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
