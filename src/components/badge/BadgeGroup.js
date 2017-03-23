import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './BadgeGroup.css';

export default class BadgeGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base space="small" { ...rest } className="ax-badge-group__container">
        <div className="ax-badge-group">
          { children }
        </div>
      </Base>
    );
  }
}
