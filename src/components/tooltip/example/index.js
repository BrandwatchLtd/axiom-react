import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Avatar from '../../avatar/Avatar';
import Context from '../../context/Context';
import ContextTip from '../../context/ContextTip';
import Paragraph from '../../typography/Paragraph';
import Tooltip from '../Tooltip';
import TooltipContent from '../TooltipContent';
import TooltipTarget from '../TooltipTarget';

class TooltipExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Tooltip: PropTypes.object.isRequired,
      TooltipContent: PropTypes.object.isRequired,
      TooltipTarget: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Tooltip: components.Tooltip,
      TooltipContent: components.TooltipContent,
      TooltipTarget: components.TooltipTarget,
    };

    const initialProps = {
      Tooltip: {},
      TooltipContent: {},
      TooltipTarget: {},
    };

    const initialPropOptions = {
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Tooltip>
          <TooltipTarget>
            <Avatar size="4rem" src="assets/avatar.png" />
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
      </ExampleConfig>
    );
  }
}

module.exports = [ TooltipExample ];
