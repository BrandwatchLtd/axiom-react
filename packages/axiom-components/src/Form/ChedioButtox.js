import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './ChedioButtox.css';

export default class ChedioButtox extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    invalid: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string,
  };

  render() {
    const {
      children,
      className,
      disabled,
      inputType,
      invalid,
      title,
      onClick,
      indeterminate,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [`${className}--disabled`]: disabled,
      [`${className}--invalid`]: invalid,
      [`${className}--indeterminate`]: indeterminate,
    });

    const handleClick = onClick && (e => {
      if (e.target.tagName !== 'INPUT') {
        e.stopPropagation();
        return;
      }
      onClick(e);
    });

    return (
      <Base
          Component="label"
          className={ classes }
          onClick={ handleClick }
          space="x2"
          title={ title }>
        <input { ...rest }
            className={ `${className}__input` }
            disabled={ disabled }
            type={ inputType } />

        <span className={ `${className}__indicator` } />
        { children && <span className={ `${className}__label` }>{ children }</span> }
      </Base>
    );
  }
}
