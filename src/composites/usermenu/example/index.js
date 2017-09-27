import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { DropdownMenu, DropdownMenuItem, UserMenu } from 'bw-axiom';
import { translate as t } from '../../../utils/locales';

class UserMenuExample extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.oneOf(['en', 'de', 'es', 'fr']),
  };

  static propTypes = {
    components: PropTypes.shape({
      UserMenu: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { axiomLanguage } = this.context;
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
              { t(axiomLanguage, 'settings') }
            </DropdownMenuItem>

            <DropdownMenuItem>
              { t(axiomLanguage, 'help') }
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
