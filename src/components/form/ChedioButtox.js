import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './ChedioButtox.css';

export default class ChedioButtox extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    indicatorClassName: PropTypes.string.isRequired,
    inputClassName: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const {
      children,
      disabled,
      inputClassName,
      inputType,
      indicatorClassName,
      title,
      onClick,
      ...rest
    } = this.props;

    const classes = classnames('ax-chedio-buttox__container', {
      'ax-chedio-buttox__container--disabled': disabled,
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
            className={ classnames('ax-chedio-buttox', inputClassName) }
            disabled={ disabled }
            type={ inputType } />

        <span className={ classnames('ax-chedio-buttox__indicator', indicatorClassName) } />
        { children  && <span className="ax-chedio-buttox__label">{ children }</span> }
      </Base>
    );
  }
}
