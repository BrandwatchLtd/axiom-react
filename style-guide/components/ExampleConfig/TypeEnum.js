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

export default class TypeEnum extends Component {
  static propTypes = {
    required: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.any,
    values: PropTypes.array.isRequired,
  };

  render() {
    const { required, setValue, value, values } = this.props;

    return (
      <ButtonGroup joined={ true }>
        <Button
            disabled={ !value || required }
            onClick={ () => setValue(undefined) }
            size="small"
            style="secondary">
          Remove
        </Button>
        <Dropdown>
          <DropdownTarget>
            <Button size="small" style="secondary">
              <ButtonIcon name="chevron-down" /> </Button>
          </DropdownTarget>
          <DropdownContent>
            <Context>
              <DropdownMenu>
                { values.map((value) =>
                  <DropdownMenuItem
                      key={ value }
                      onClick={ () => setValue(value) }>
                    { value.toString() }
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
