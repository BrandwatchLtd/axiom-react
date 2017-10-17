import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Login from '../Login';

class LoginExample extends Component {

  static propTypes = {
    components: PropTypes.shape({
      Login: PropTypes.object,
    }).isRequired,
  };

  handleSubmit({ username, password }) {
    window.alert(`Login attempted with username '${username}' and password '${password}'`);
  }

  render() {
    const { components } = this.props;
    const propTypes = {
      Login: components.Login,
    };

    const initialProps = {
      Login: {
        application: 'Axiom',
        backgroundImage: 'assets/axiom-bg.jpg',
        error: 'Sorry but we don\'t recognise your username and password combination. \
          Please check your details and try again.',
        onSubmit: this.handleSubmit.bind(this),
        theme: 'dark',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <div snippetIgnore style={ { height: '30rem' } }>
          <Login { ...initialProps.Login } />
        </div>
      </ExampleConfig>
    );
  }
}

export default [ LoginExample ];
