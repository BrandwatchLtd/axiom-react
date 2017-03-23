import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './LabelGroup.css';

export default class LabelGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base space="small" { ...rest } className="ax-label-group__container">
        <div className="ax-label-group">
          { children }
        </div>
      </Base>
    );
  }
}
