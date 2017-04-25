import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Context,
  ContextTip,
  Paragraph,
  Tooltip,
  TooltipTarget,
  TooltipContent,
} from 'bw-axiom';

export default class TooltipDemo extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Tooltip { ...this.props }>
        <TooltipTarget>
          { this.props.children }
        </TooltipTarget>

        <TooltipContent>
          <Context>
            <ContextTip>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis at velit ut nisl eleifend volutpat.
              </Paragraph>
            </ContextTip>
          </Context>
        </TooltipContent>
      </Tooltip>
    );
  }
}
