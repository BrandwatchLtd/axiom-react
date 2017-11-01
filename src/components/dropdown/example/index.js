import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import ButtonIcon from '../../button/ButtonIcon';
import Context from '../../context/Context';
import Dropdown from '../Dropdown';
import DropdownContent from '../DropdownContent';
import DropdownMenu from '../DropdownMenu';
import DropdownMenuItem from '../DropdownMenuItem';
import DropdownTarget from '../DropdownTarget';

class DropdownExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Dropdown: PropTypes.object.isRequired,
      DropdownContent: PropTypes.object.isRequired,
      DropdownMenu: PropTypes.object.isRequired,
      DropdownMenuItem: PropTypes.object.isRequired,
      DropdownTarget: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Dropdown: components.Dropdown,
      DropdownContent: components.DropdownContent,
      DropdownMenu: components.DropdownMenu,
      DropdownMenuItem: components.DropdownMenuItem,
      DropdownTarget: components.DropdownTarget,
    };

    const initialProps = {
      Dropdown: {
        onRequestOpen: () => console.log('open'), // eslint-disable-line no-console
        onRequestClose: () => console.log('close'), // eslint-disable-line no-console
      },
      DropdownContent: {},
      DropdownMenu: {},
      DropdownMenuItem: {},
      DropdownTarget: {},
    };

    const initialPropOptions = {
      DropdownMenu: {
        children: {
          count: 5,
          max: Infinity,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ButtonGroup joined>
          <Button
              style="secondary">Primary Action</Button>

          <Dropdown { ...initialProps.Dropdown }>
            <DropdownTarget { ...initialProps.DropdownTarget }>
              <Button style="secondary">
                <ButtonIcon name="chevron-down" />
              </Button>
            </DropdownTarget>

            <DropdownContent { ...initialProps.DropdownContent }>
              <Context>
                <DropdownMenu { ...initialProps.DropdownMenu }>
                  <DropdownMenuItem { ...initialProps.DropdownMenuItem }>
                    Lorem ipsum
                  </DropdownMenuItem>
                </DropdownMenu>
              </Context>
            </DropdownContent>
          </Dropdown>
        </ButtonGroup>
      </ExampleConfig>
    );
  }
}

export default [ DropdownExample ];
