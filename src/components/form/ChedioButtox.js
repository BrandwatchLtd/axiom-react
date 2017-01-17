import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ChedioButtox.scss');
}

export default class ChedioButtox extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    indicatorClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    inputType: PropTypes.string.isRequired,
  };

  render() {
    const {
      children,
      disabled,
      inputClassName,
      inputType,
      indicatorClassName,
      ...rest
    } = this.props;

    const classes = classnames('ax-chedio-buttox__container', {
      'ax-chedio-buttox__container--disabled': disabled,
      'ax-chedio-buttox__container--space': !!children,
    });

    return (
      <Base Component="label" className={ classes }>
        <input { ...rest }
            className={ classnames('ax-chedio-buttox', inputClassName) }
            disabled={ disabled }
            type={ inputType } />

        <span className={ classnames('ax-chedio-buttox__indicator', indicatorClassName) } />
        <span className="ax-chedio-buttox__label">{ children }</span>
      </Base>
    );
  }
}
