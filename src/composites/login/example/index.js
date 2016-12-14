import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Login from '../Login';

class LoginExample extends Component {

  handleSubmit({ username, password }) {
    window.alert(`Login attempted with username '${username}' and passowrd '${password}'`);
  }

  render() {
    const containerStyles = {
      width: '100%',
      height: 600,
    };

    return (
      <Example title="Login page">
        <Snippet>
          <div snippetIgnore={ true } style={ containerStyles }>
            <Login
                backgroundImage="assets/axiom-bg.jpg"
                onSubmit={ ::this.handleSubmit }/>
          </div>
        </Snippet>
      </Example>
    );
  }
}

module.exports = [ LoginExample ];
