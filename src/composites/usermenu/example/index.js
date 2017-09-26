import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import DropdownMenu from '../../../components/dropdown/DropdownMenu';
import DropdownMenuItem from '../../../components/dropdown/DropdownMenuItem';
import UserMenu from '../UserMenu';

class UserMenuExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      UserMenu: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      UserMenu: components.UserMenu,
    };

    const initalProps = {
      UserMenu: {
        email: 'lorem.ipsum@gmail.com',
        firstName: 'Lorem',
        imageSrc: '',
        lastName: 'Ipsum',
        onLogout: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initalProps } propTypes={ propTypes }>
        <UserMenu { ...initalProps.UserMenu }>
          <DropdownMenu>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem>
              Help!
            </DropdownMenuItem>
          </DropdownMenu>
        </UserMenu>
      </ExampleConfig>
    );
  }
}


module.exports = [
  UserMenuExample,
];
