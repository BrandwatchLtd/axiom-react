import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonIcon from '../ButtonIcon';

class ButtonExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Button: PropTypes.object.isRequired,
      ButtonGroup: PropTypes.object.isRequired,
      ButtonIcon: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Button: components.Button,
      ButtonGroup: components.ButtonGroup,
      ButtonIcon: components.ButtonIcon,
    };

    const initialProps = {
      Button: {},
      ButtonGroup: {
        textCenter: true,
      },
      ButtonIcon: {},
    };

    const initialPropOptions = {
      Button: {
        children: {
          options: [
            { name: 'Text', children: 'Lorem ipsum' },
            { name: 'Text + Icon', children: ['Dolar amet', <ButtonIcon  key="ButtonIcon" name="chevron-down" />] },
            { name: 'Icon', children: <ButtonIcon name="chevron-down" /> },
            { name: 'Number (2 digit)', children: '10' },
            { name: 'Number (3 digit)', children: '100' },
          ],
        },
      },
      ButtonGroup: {
        children: {
          count: 1,
          min: 1,
          max: Infinity,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ButtonGroup { ...initialProps.ButtonGroup }>
          <Button { ...initialProps.Button }>
            { initialPropOptions.Button.children.options[0].children }
          </Button>
        </ButtonGroup>
      </ExampleConfig>
    );
  }
}

export default [ ButtonExample ];
