import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './List.css';

export default class List extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** ListItems */
    children: PropTypes.node,
    /** Style of the list and items */
    style: PropTypes.oneOf(['none', 'disc', 'ordered', 'inline']),
  };

  static defaultProps = {
    style: 'disc',
  };

  render() {
    const {
      children,
      style,
      ...rest
    } = this.props;

    const tag = style === 'ordered' ? 'ol' : 'ul';
    const classes = classnames(
      'ax-list',
      `ax-list--style-${ style }`,
    );

    return (
      <Base space="x4" { ...rest } Component={ tag } className={ classes }>
        { children }
      </Base>
    );
  }
}
