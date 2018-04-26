import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import Position from '../Position/Position';
import PositionTarget from '../Position/PositionTarget';
import PositionSource from '../Position/PositionSource';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';
import Text from '../Typography/Text';

export default class InlineValidation extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    message: PropTypes.string,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  }

  static defaultProps = {
    position: 'bottom',
  }

  render() {
    const { children, message, position, onClick, onFocus } = this.props;

    return (
      <Position isVisible={ !!message } position={ position }>
        <PositionTarget>
          { cloneElement(children, { onClick, onFocus }) }
        </PositionTarget>
        <PositionSource>
          <TooltipContext color="error">
            <TooltipContent color="error">
              <Text textColor="night">
                { message }
              </Text>
            </TooltipContent>
          </TooltipContext>
        </PositionSource>
      </Position>
    );
  }
}
