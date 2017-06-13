import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Bar,
  Dropdown,
  DropdownContent,
  DropdownTarget,
} from 'bw-axiom';

export default class BarChartContext extends PureComponent {
  static propTypes = {
    ContextComponent: PropTypes.func,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    dataIndex: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    labelStrong: PropTypes.bool.isRequired,
    showLabel: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  render() {
    const {
      ContextComponent,
      color,
      data,
      dataIndex,
      label,
      labelStrong,
      onMouseEnter,
      onMouseLeave,
      showLabel,
      value,
      ...rest
    } = this.props;

    const bar = (
      <Bar { ...rest }
          color={ color }
          labelStrong={ labelStrong }
          onMouseEnter={ () => onMouseEnter(dataIndex, color) }
          onMouseLeave={ onMouseLeave }
          percent={ value }
          showLabel={ showLabel } />
    );

    if (ContextComponent) {
      return (
        <Dropdown>
          <DropdownTarget>
            {bar}
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

    return bar;
  }
}
