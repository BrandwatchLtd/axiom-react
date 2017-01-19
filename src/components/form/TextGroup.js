import React, { Component, PropTypes } from 'react';
import { Base, Strong } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./TextGroup.scss');
}

export default class TextGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
  };

  render() {
    const { children, label, ...rest } = this.props;

    return (
      <Base { ...rest } Component="label" className="ax-input__group">
        { do { if (label) {
          <div className="ax-input__label">
            <Strong>{ label }</Strong>
          </div>;
        } } }

        { children }
      </Base>
    );
  }
}
