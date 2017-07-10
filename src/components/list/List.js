import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './List.css';

export default class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    ordered: PropTypes.bool,
  };

  render() {
    const {
      className,
      children,
      ordered,
      inline,
      ...rest
    } = this.props;

    const tag = ordered ? 'ol' : 'ul';
    const classes = classnames(className,
      'ax-list', {
        'ax-list--inline': inline === true,
      }
    );

    return (
      <Base space="x4" { ...rest } Component={ tag } className={ classes }>
        { children }
      </Base>
    );
  }
}
