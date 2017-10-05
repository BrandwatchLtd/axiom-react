import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Avatar from '../../avatar/Avatar';
import Context from '../../context/Context';
import ContextBox from '../../context/ContextBox';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Position from '../Position';
import PositionContent from '../PositionContent';
import PositionTarget from '../PositionTarget';
import Strong from '../../typography/Strong';

class PositionExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Position: PropTypes.object,
      PositionContent: PropTypes.object,
      PositionTarget: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      position: undefined,
    };
  }

  render() {
    const { components } = this.props;
    const { position } = this.state;

    const propTypes = {
      Position: components.Position,
      PositionContent: components.PositionContent,
      PositionTarget: components.PositionTarget,
    };

    const initialProps = {
      Position: {
        isVisible: true,
        onMaskClick: () => {},
        onPositionChange: (position) => this.setState({ position }),
        position: 'bottom',
      },
    };

    const initialPropOptions = {
      Position: {
        onMaskClick: {
          callback: (setProp) => setProp('Position', 'isVisible', false),
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
            <Avatar size="2rem" snippetReplace src="assets/avatar.png" />
          </PositionTarget>

          <PositionContent>
            <Context snippetReplace>
              <ContextBox>
                <Heading>
                  <Strong>Current postition:</Strong> { position }
                </Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Paragraph>
              </ContextBox>
            </Context>
          </PositionContent>
        </Position>
      </ExampleConfig>
    );
  }
}


module.exports = [ PositionExample ];
