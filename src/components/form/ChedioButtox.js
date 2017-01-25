import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ChedioButtox.scss');
}

export default class ChedioButtox extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    indicatorClassName: PropTypes.string.isRequired,
    inputClassName: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
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
