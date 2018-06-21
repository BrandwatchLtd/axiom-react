import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './InputWrapper.css';
import classnames from 'classnames';

const labelSizeMap = {
  small: 'small',
  medium: 'body',
  large: 'large',
};

export default class InputWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    isTarget: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    space: PropTypes.string,
  };

  static defaultProps = {
    size: 'medium',
    space: 'x4',
  };

  render() {
    const { children, isTarget, label, size, space, ...rest } = this.props;

    const classes = classnames('ax-input__wrapper', {
      'ax-input__wrapper--target': isTarget,
    });

    return (
      <Base { ...rest }
          Component="label"
          className={ classes }
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
