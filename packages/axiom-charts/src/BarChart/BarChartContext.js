import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Dropdown, DropdownSource, DropdownTarget } from '@brandwatch/axiom-components';
import Bar from '../Bar/Bar';

export default class BarChartContext extends PureComponent {
  static propTypes = {
    DropdownContext: PropTypes.func,
    barLabel: PropTypes.func,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    isFaded: PropTypes.bool,
    isHidden: PropTypes.bool,
    label: PropTypes.node.isRequired,
    labelStrong: PropTypes.bool.isRequired,
    lower: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    showBarLabel: PropTypes.bool.isRequired,
    size: PropTypes.string,
    upper: PropTypes.number,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      DropdownContext,
      barLabel,
      color,
      data,
      isFaded,
      isHidden,
      label,
      labelStrong,
      lower,
      onMouseEnter,
      onMouseLeave,
      showBarLabel,
      size,
      upper,
      value,
      ...rest
    } = this.props;

    const dValue = ((value - lower) / (upper - lower)) * 100;

    const getLabel = () => {
      if (!barLabel) {
        return value;
      }

      return barLabel({ value, data, color, label });
    };

    const bar = (
      <Bar { ...rest }
          color={ color }
          isFaded={ isFaded }
          isHidden={ isHidden }
          label={ getLabel() }
          labelStrong={ labelStrong }
          onMouseEnter={ onMouseEnter && (() => onMouseEnter(color)) }
          onMouseLeave={ onMouseLeave }
          percent={ dValue }
          showLabel={ showBarLabel }
          size={ size } />
    );

    if (DropdownContext && value > 0) {
      return (
        <Dropdown>
          <DropdownTarget>
            { bar }
          </DropdownTarget>

          <DropdownSource>
            <DropdownContext
                color={ color }
                data={ data }
                label={ label }
                value={ value } />
          </DropdownSource>
        </Dropdown>
      );
    }

    return bar;
  }
}
