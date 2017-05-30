import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dropdown, DropdownContent, DropdownTarget } from 'bw-axiom';
import DotPlotDots from './DotPlotDots';

export default class DotPlotContext extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      ContextComponent,
      colors,
      data,
      label,
      value,
      ...rest
    } = this.props;

    if (ContextComponent) {
      return (
        <Dropdown>
          <DropdownTarget>
            <DotPlotDots { ...rest }
                colors={ colors }
                value={ value } />
          </DropdownTarget>

          <DropdownContent>
            <ContextComponent
                colors={ colors }
                data={ data }
                label={ label }
                value={ value } />
          </DropdownContent>
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
