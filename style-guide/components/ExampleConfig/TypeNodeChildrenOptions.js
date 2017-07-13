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
    }).isRequired,
    setOptionValue: PropTypes.func.isRequired,
  };

  render() {
    const { propOptions, setOptionValue } = this.props;
    const { options } = propOptions;

    return (
      <ButtonGroup joined={ true }>
        <Button
            onClick={ () => setOptionValue('selection', undefined) }
            size="small"
            style="secondary">
          Reset
        </Button>
        <Dropdown>
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
                      onClick={ () => setOptionValue('selection', name) }>
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
