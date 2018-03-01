import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Bar from '../bars/Bar';
import Dropdown from '../../components/dropdown/Dropdown';
import DropdownContent from '../../components/dropdown/DropdownContent';
import DropdownTarget from '../../components/dropdown/DropdownTarget';

export default class BarChartContext extends PureComponent {
  static propTypes = {
    BarChartLabelComponent: PropTypes.func,
    ContextComponent: PropTypes.func,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    isFaded: PropTypes.bool,
    isHidden: PropTypes.bool,
    label: PropTypes.node.isRequired,
    labelStrong: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    showBarLabel: PropTypes.bool.isRequired,
    size: PropTypes.string,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      BarChartLabelComponent,
      ContextComponent,
      color,
      data,
      isFaded,
      isHidden,
      label,
      labelStrong,
      onMouseEnter,
      onMouseLeave,
      showBarLabel,
      size,
      value,
      ...rest
    } = this.props;

    const getLabelComponent = () => {
      if (!BarChartLabelComponent) {
        return null;
      }

      return (
        <BarChartLabelComponent
            color={ color }
            data={ data }
            label={ label }
            value={ value } />
      );
    };

    const bar = (
      <Bar { ...rest }
          color={ color }
          isFaded={ isFaded }
          isHidden={ isHidden }
          label={ getLabelComponent() }
          labelStrong={ labelStrong }
          onMouseEnter={ onMouseEnter && (() => onMouseEnter(color)) }
          onMouseLeave={ onMouseLeave }
          percent={ value }
          showLabel={ showBarLabel }
          size={ size } />
    );

    if (ContextComponent && value > 0) {
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
