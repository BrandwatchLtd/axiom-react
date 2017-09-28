import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import t from '../../../utils/locales';
import DropdownMenu from '../../../components/dropdown/DropdownMenu';
import DropdownMenuItem from '../../../components/dropdown/DropdownMenuItem';
import UserMenu from '../UserMenu';

class UserMenuExample extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.oneOf(['en', 'en-US', 'en-AU', 'en-BZ', 'en-CA', 'en-CB', 'en-GB', 'en-IN', 'en-IE', 'en-JM', 'en-NZ', 'en-PH', 'en-ZA', 'en-TT', 'de', 'de-DE', 'de-AT', 'de-LI', 'de-LU', 'de-CH', 'es-ES', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-SV', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PY', 'es-PE', 'es-PR', 'es-UY', 'es-VE', 'fr', 'fr-FR', 'fr-BE', 'fr-CA', 'fr-LU', 'fr-CH']),
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
