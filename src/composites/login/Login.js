import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';
import {
  Base,
  Button,
  ButtonGroup,
  Form,
  Grid,
  GridCell,
  TextInput,
  Link,
  LogoTab,
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
            <LogoTab color="grey" height="7.75rem" />
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

              <Grid vAlign="middle">
                <GridCell shrink={ true }>
                  <ButtonGroup>
                    <Button
                        full="small"
                        size="large"
                        type="submit">Login</Button>
                  </ButtonGroup>
                </GridCell>

                <GridCell>
                  <Paragraph textCenter={ true } textRight="small">
                    <Link href="https://app.brandwatch.com/login" target="_blank">
                      <Strong>Forgot login details?</Strong>
                    </Link>
                  </Paragraph>
                </GridCell>
              </Grid>
            </Form>

            <Paragraph textColor="error">
              <Strong>{ error }</Strong>
            </Paragraph>
          </div>
        </div>
      </Base>
    );
  }
}
