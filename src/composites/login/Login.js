import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';
import {
  Base,
  Button,
  ButtonGroup,
  Form,
  TextInput,
  Link,
  LogoVertical,
  Paragraph,
  Heading,
  Strong,
  Weak,
} from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Login.scss');
}

export default class Login extends Component {
  static propTypes = {
    application: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    error: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.setState({
      username: '',
      password: '',
    });
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { username, password } = this.state;

    event.preventDefault();
    onSubmit({ username, password });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { application, backgroundImage, error, ...rest } = this.props;
    const { username, password } = this.state;
    const style = { backgroundImage: `url(${backgroundImage})` };

    return (
      <Base { ...omit(rest, ['onSubmit']) } className="ax-login" style={ style }>
        <div className="ax-login__header">
          <div className="ax-login__header-container">
            <div className="ax-login__logo">
              <LogoVertical height="6.25rem" />
            </div>
          </div>
        </div>

        <div className="ax-login__body">
          <div className="ax-login__form">
            <Heading style="display">{ application }<Weak>/ Login</Weak></Heading>

            <Form onSubmit={ ::this.handleSubmit }>
              <TextInput
                  onChange={ ::this.handleUsernameChange }
                  placeholder="Username"
                  size="large"
                  style="translucent"
                  value={ username } />

              <TextInput
                  onChange={ ::this.handlePasswordChange }
                  placeholder="Password"
                  size="large"
                  style="translucent"
                  type="password"
                  value={ password } />
              <ButtonGroup>
                <Button
                    full="small"
                    size="large"
                    type="submit">Login</Button>
              </ButtonGroup>
            </Form>

            { do { if (error) {
              <Paragraph textInvalid={ true }>
                <Strong>{ error }</Strong>
              </Paragraph>;
            } } }
          </div>
        </div>

        <div className="ax-login__footer">
          <Paragraph textCenter={ true } textRight="small">
            Forgotten your Brandwatch password? <Link href="https://app.brandwatch.com/login">
            Reset it here. </Link>
          </Paragraph>
        </div>
      </Base>
    );
  }
}
