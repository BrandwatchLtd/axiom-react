import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './InlineGroup.css';

export default class InlineGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
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
