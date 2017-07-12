import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
import atIds from '../../../at_ids';
import './Login.css';

export default class Login extends Component {
  static propTypes = {
    /** Name of the application that appears in the header */
    application: PropTypes.string.isRequired,
    /** Background image that is behind the login form */
    backgroundImage: PropTypes.string.isRequired,
    /** An error message that will be placed on the page */
    error: PropTypes.string,
    /** Controls over the text and input styling for a dark or light background */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Submit handler that will be called with the username and password */
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    theme: 'light',
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
    const { application, backgroundImage, error, theme, ...rest } = this.props;
    const { username, password } = this.state;
    const style = { backgroundImage: `url(${backgroundImage})` };
    const textColor = {
      dark: 'light',
      light: 'dark',
    }[theme];

    return (
      <Base { ...omit(rest, ['onSubmit']) }
          className="ax-login"
          style={ style }
          textColor={ textColor }>
        <div className="ax-login__header">
          <div className="ax-login__header-container">
            <LogoTab color="grey" height="7.75rem" />
          </div>
        </div>

        <div className="ax-login__body">
          <div className="ax-login__form">
            <Heading space="small" style="display">
              { application }<Weak>/ Login</Weak>
            </Heading>

            <Form onSubmit={ e => this.handleSubmit(e) }>
              <TextInput
                  data-ax-at={ atIds.Login.username }
                  onChange={ e => this.handleUsernameChange(e) }
                  placeholder="Username"
                  size="large"
                  theme={ theme }
                  value={ username } />

              <TextInput
                  data-ax-at={ atIds.Login.password }
                  onChange={ e => this.handlePasswordChange(e) }
                  placeholder="Password"
                  size="large"
                  theme={ theme }
                  type="password"
                  value={ password } />

              <Grid space="small" verticalAlign="middle">
                <GridCell shrink={ true }>
                  <ButtonGroup>
                    <Button
                        data-ax-at={ atIds.Login.submit }
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

            <Paragraph space="small" textColor="error">
              <Strong data-ax-at={ atIds.Login.error }>
                { error }
              </Strong>
            </Paragraph>
          </div>
        </div>
      </Base>
    );
  }
}
