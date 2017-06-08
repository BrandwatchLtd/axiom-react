import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Bar,
  Dropdown,
  DropdownContent,
  DropdownTarget,
} from 'bw-axiom';

export default class BarChartContext extends Component {
  static propTypes = {
    ContextComponent: PropTypes.func,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      ContextComponent,
      color,
      data,
      label,
      value,
      ...rest
    } = this.props;

    if (ContextComponent) {
      return (
        <Dropdown>
          <DropdownTarget>
            <Bar { ...rest }
                color={ color }
                percent={ value } />
          </DropdownTarget>

          <DropdownContent>
            <ContextComponent
                color={ color }
                data={ data }
                label={ label }
                value={ value } />
          </DropdownContent>
        </Dropdown>
      );
    }

    return (
      <Bar { ...rest }
          color={ color }
          percent={ value } />
    );
  }
}
