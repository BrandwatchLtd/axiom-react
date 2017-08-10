import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './List.css';

export default class List extends Component {
  static propTypes = {
    /** ListItems */
    children: PropTypes.node,
    /** Styling to place ListItems inline to one another */
    inline: PropTypes.bool,
    /** Switches to a ordered number list */
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
