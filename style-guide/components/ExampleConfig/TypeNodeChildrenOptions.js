import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ButtonGroup,
  Button,
  ButtonIcon,
  Context,
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTarget,
} from 'bw-axiom';

export default class TypeNodeChildrenOptions extends Component {
  static propTypes = {
    propOptions: PropTypes.shape({
      options: PropTypes.array,
      selection: PropTypes.any,
    }).isRequired,
    setOptionValue: PropTypes.func.isRequired,
  };

  render() {
    const { propOptions, setOptionValue } = this.props;
    const { options, selection } = propOptions;

    return (
      <ButtonGroup joined={ true }>
        <Button
            onClick={ () => setOptionValue('selection', undefined) }
            size="small"
            style="secondary">
          Reset
        </Button>
        <Dropdown flip="mirror">
          <DropdownTarget>
            <Button size="small" style="secondary">
              <ButtonIcon name="chevron-down" />
            </Button>
          </DropdownTarget>
          <DropdownContent>
            <Context>
              <DropdownMenu>
                { options.map(({ name }) =>
                  <DropdownMenuItem
                      key={ name }
                      onClick={ () => setOptionValue('selection', name) }
                      selected={ selection === name }>
                    { name }
                  </DropdownMenuItem>
                ) }
              </DropdownMenu>
            </Context>
          </DropdownContent>
        </Dropdown>
      </ButtonGroup>
    );
  }
}
