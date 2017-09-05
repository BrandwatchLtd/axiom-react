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

function isSelected(values, val) {
  return Array.isArray(values) && values.filter((v) => v === val).length > 0;
}

function withOrWithout(values = [], val) {
  return isSelected(values, val)
    ? values.filter((v) => v !== val)
    : [...values, val];
}

export default class TypeArrayOfEnum extends Component {
  static propTypes = {
    required: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.array,
    values: PropTypes.array.isRequired,
  };

  render() {
    const { required, setValue, value, values } = this.props;

    return (
      <ButtonGroup joined>
        <Button
            disabled={ value === undefined || required }
            onClick={ () => setValue(undefined) }
            size="small"
            style="secondary">
          Remove
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
                { values.map((val) =>
                  <DropdownMenuItem
                      key={ val }
                      multiSelect
                      onClick={ () => setValue(withOrWithout(value, val)) }
                      selected={ isSelected(value, val) }>
                    { val.toString() }
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
