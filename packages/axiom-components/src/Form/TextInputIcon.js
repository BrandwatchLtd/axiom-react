import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { isComponent } from '@brandwatch/axiom-utils';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import Tooltip from '../Tooltip/Tooltip';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext, { TooltipContextRef } from '../Tooltip/TooltipContext';
import TooltipSource from '../Tooltip/TooltipSource';
import TooltipTarget from '../Tooltip/TooltipTarget';

export const TextInputIconRef = 'TextInputIcon';

export default class TextInputIcon extends Component {
  static propTypes = {
    /** Alignment inside the input field */
    align: PropTypes.oneOf(['left', 'right']),
    /** Color of the TextInputIcon. */
    iconColor: PropTypes.string,
    /** Name of the icon. See <Icon>. */
    name: PropTypes.string.isRequired,
    /** Click handler, applies styling to indicate it is clickable. */
    onClick: PropTypes.func,
    /** Optional tooltip for the icon. */
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };

  static defaultProps = {
    align: 'right',
  };

  static typeRef = TextInputIconRef;

  getIcon(name, iconColor, tooltip) {
    return tooltip ? (
      <Tooltip isVisible>
        <TooltipTarget>
          <Icon name={ name } size="1rem" textColor={ iconColor } />
        </TooltipTarget>
        <TooltipSource width="auto">
          { isComponent(tooltip, TooltipContextRef) ? tooltip : (
            <TooltipContext>
              <TooltipContent size="tiny">
                { tooltip }
              </TooltipContent>
            </TooltipContext>
          ) }
        </TooltipSource>
      </Tooltip>
    ) : (<Icon name={ name } size="1rem" textColor={ iconColor } />);
  }

  render() {
    const { align, iconColor, name, onClick, tooltip, ...rest } = this.props;
    const className = classnames('ax-input__icon', {
      [`ax-input__icon--align-${align}`]: align,
    });

    return (
      <span className={ className }>
        {
          onClick ? (
            <Link { ...rest } onClick={ onClick } style="subtle">
              { this.getIcon(name, iconColor, tooltip) }
            </Link>
          ) : this.getIcon(name, iconColor, tooltip)
        }
      </span>
    );
  }
}
