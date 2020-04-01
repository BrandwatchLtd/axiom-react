import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';

import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

export default class UsageHint extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    showArrow: PropTypes.bool,
    /** Total width of the usageHint dropdown context */
    width: PropTypes.string,
  };

  static defaultProps = {
    showArrow: true,
  };

  render() {
    const { children, width, ...rest } = this.props;

    return (
      <Dropdown {...rest} showArrow>
        <DropdownTarget>
          <Link style="subtle">
            <Icon name="question-mark-circle" size="1rem" />
          </Link>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width={width}>
            <DropdownContent>{children}</DropdownContent>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    );
  }
}
