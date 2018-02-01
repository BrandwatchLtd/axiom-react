import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Dropdown, DropdownSource, DropdownTarget } from '@brandwatch/axiom-components';
import Bar from '../Bar/Bar';

export default class ColumnChartContext extends PureComponent {
  static propTypes = {
    DropdownContext: PropTypes.func,
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
      DropdownContext,
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

    const bar = (
      <Bar { ...rest }
          color={ color }
          isFaded={ isFaded }
          isHidden={ isHidden }
          labelStrong={ labelStrong }
          onMouseEnter={ onMouseEnter && (() => onMouseEnter(color)) }
          onMouseLeave={ onMouseLeave }
          percent={ value }
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
