import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./ChedioButtox.scss');
}

export default class ChedioButtox extends Component {
  static propTypes = {
    children: PropTypes.node,
    indicatorClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    inputType: PropTypes.string.isRequired,
  };

  render() {
    const {
      className,
      children,
      inputClassName,
      inputType,
      indicatorClassName,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-chedio-buttox__container', {
        ['ax-chedio-buttox__container--space']: !!children,
      }
    );

    return (
      <Base Component="label" className={ classes }>
        <input { ...rest } className={ classnames('ax-chedio-buttox', inputClassName) } type={ inputType } />
        <span className={ classnames('ax-chedio-buttox__indicator', indicatorClassName) } />
        <span className="ax-chedio-buttox__label">{ children }</span>
      </Base>
    );
  }
}
