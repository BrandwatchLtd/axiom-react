import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import ChangePassword from '../ChangePassword';

class ChangePasswordExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ChangePassword: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      ChangePassword: components.ChangePassword,
    };

    const initalProps = {
      ChangePassword: {
        isOpen: false,
        onRequestClose: () => {},
        onSubmit: () => {},
      },
    };

    const initialPropOptions = {
      ChangePassword: {
        onRequestClose: {
          callback: (setProp) => setProp('ChangePassword', 'isOpen', false),
        },
      },
    };

    return (
      <ExampleConfig
          hasVisual={ false }
          initialPropOptions={ initialPropOptions }
          initialProps={ initalProps }
          propTypes={ propTypes }>
        <ChangePassword { ...initalProps.ChangePassword } />
      </ExampleConfig>
    );
  }
}


export default [ ChangePasswordExample ];
