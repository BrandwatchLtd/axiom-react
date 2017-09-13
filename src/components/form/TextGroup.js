import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Strong } from 'bw-axiom';
import './TextGroup.css';

export default class TextGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    space: PropTypes.string,
  };

  static defaultProps = {
    space: 'x4',
  };

  render() {
    const { children, label, space, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component="label"
          className="ax-input__group"
          space={ space }>
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
