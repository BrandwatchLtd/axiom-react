import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  Avatar,
  Context,
  ContextBox,
  Position,
  PositionContent,
  PositionTarget,
} from 'bw-axiom';

class PositionExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Position: PropTypes.object,
      PositionContent: PropTypes.object,
      PositionTarget: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Position: components.Position,
      PositionContent: components.PositionContent,
      PositionTarget: components.PositionTarget,
    };

    const initialProps = {
      Position: {
        isVisible: true,
        onMaskClick: () => {
          window.alert('Masked click!');
          window.location = window.location;
        },
        position: 'bottom',
      },
    };

    const initialPropOptions = {
      Position: {
        onMaskClick: {
          included: false,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Position { ...initialProps.Position }>
          <PositionTarget>
            <Avatar size="4rem" snippetReplace={ true } src="assets/avatar.png" />
          </PositionTarget>

          <PositionContent>
            <Context snippetReplace={ true }>
              <ContextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis at velit ut nisl eleifend volutpat.
              </ContextBox>
            </Context>
          </PositionContent>
        </Position>
      </ExampleConfig>
    );
  }
}


module.exports = [ PositionExample ];
