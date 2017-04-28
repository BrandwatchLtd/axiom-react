import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Strong } from 'bw-axiom';
import './TextGroup.css';

export default class TextGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
  };

  render() {
    const { children, label, ...rest } = this.props;

    return (
      <Base space="small" { ...rest } Component="label" className="ax-input__group">
        { label && (
          <div className="ax-input__label">
            <Strong>{ label }</Strong>
          </div>
        ) }

        { children }
      </Base>
    );
  }
}
