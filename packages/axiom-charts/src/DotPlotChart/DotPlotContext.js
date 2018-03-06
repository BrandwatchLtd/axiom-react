import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dropdown, DropdownSource, DropdownTarget } from '@brandwatch/axiom-components';
import DotPlotDots from './DotPlotDots';

export default class DotPlotContext extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    lower: PropTypes.number,
    upper: PropTypes.number,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      DropdownContext,
      colors,
      data,
      label,
      lower,
      upper,
      value,
      ...rest
    } = this.props;

    const dValue = ((value - lower) / (upper - lower)) * 100;

    if (DropdownContext) {
      return (
        <Dropdown>
          <DropdownTarget>
            <DotPlotDots { ...rest }
                colors={ colors }
                value={ dValue } />
          </DropdownTarget>

          <DropdownSource>
            <DropdownContext
                colors={ colors }
                data={ data }
                label={ label }
                value={ value } />
          </DropdownSource>
        </Dropdown>
      );
    }

    return (
      <DotPlotDots { ...rest }
          colors={ colors }
          value={ dValue } />
    );
  }
}
