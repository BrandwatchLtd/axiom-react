import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Login } from 'bw-axiom';

class LoginExample extends Component {

  handleSubmit({ username, password }) {
    window.alert(`Login attempted with username '${username}' and password '${password}'`);
  }

  render() {
    const containerStyles = {
      width: '100%',
      height: 600,
    };

    return (
      <Example name="Login page">
        <Snippet>
          <div snippetIgnore={ true } style={ containerStyles }>
            <Login
                application="Audiences"
                backgroundImage="assets/axiom-bg.jpg"
                error="Sorry but we don't recognise your username and password combination.
                  Please check your details and try again."
                onSubmit={ ::this.handleSubmit }
                theme="dark" />
          </div>
        </Snippet>
      </Example>
    );
  }
}

module.exports = [ LoginExample ];
