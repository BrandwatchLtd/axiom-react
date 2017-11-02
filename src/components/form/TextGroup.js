import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import './TextGroup.css';

const labelSizeMap = {
  small: 'small',
  medium: 'body',
  large: 'large',
};

export default class TextGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    space: PropTypes.string,
  };

  static defaultProps = {
    size: 'medium',
    space: 'x4',
  };

  render() {
    const { children, label, size, space, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component="label"
          className="ax-input__group"
          space={ space }>
        { label && (
          <Base space="x2" textSize={ labelSizeMap[size] }>
            { label }
          </Base>
        ) }

        { children }
      </Base>
    );
  }
}
