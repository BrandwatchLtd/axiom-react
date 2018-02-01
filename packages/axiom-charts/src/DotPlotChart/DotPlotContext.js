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
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      DropdownContext,
      colors,
      data,
      label,
      value,
      ...rest
    } = this.props;

    if (DropdownContext) {
      return (
        <Dropdown>
          <DropdownTarget>
            <DotPlotDots { ...rest }
                colors={ colors }
                value={ value } />
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
          value={ value } />
    );
  }
}
