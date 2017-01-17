import React, { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node,
    inheritColor: PropTypes.bool,
    supressStyle: PropTypes.bool,
    to: PropTypes.string,
  };

  render() {
    const {
      children,
      to,
      inheritColor,
      supressStyle,
      ...rest
    } = this.props;

    const classes = classnames({
      'ax-link': supressStyle !== true,
      'ax-link--inherit-color': inheritColor,
    });

    if (to) {
      return (
        <RouterLink { ...rest } className={ classes } to={ to }>
          { children }
        </RouterLink>
      );
    }

    return (
      <Base { ...rest } Component="a" className={ classes }>
        { children }
      </Base>
    );
  }
}
