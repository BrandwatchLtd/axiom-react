import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './InlineGroup.css';

export default class InlineGroup extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { children, className, ...rest } = this.props;
    const classes = classnames('ax-inline-group', className);

    return (
      <Base { ...rest } className={ classes }>
        <div className="ax-inline-group__spacer">
          { children }
        </div>
      </Base>
    );
  }
}
