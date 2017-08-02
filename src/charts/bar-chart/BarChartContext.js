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
    isFaded: PropTypes.bool,
    isHidden: PropTypes.bool,
    label: PropTypes.node.isRequired,
    labelStrong: PropTypes.bool.isRequired,
    showBarLabel: PropTypes.bool.isRequired,
    size: PropTypes.string,
    value: PropTypes.number.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  render() {
    const {
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
