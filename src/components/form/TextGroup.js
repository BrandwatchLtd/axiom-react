import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Strong from '../typography/Strong';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./TextGroup.scss');
}

export default class TextGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
  };

  render() {
    const { className, children, label } = this.props;
    const classes = classnames(className, 'ax-input__group');

    return (
      <Base Component="label" className={ classes }>
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
