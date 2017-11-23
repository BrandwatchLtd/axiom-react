import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Button from '../../components/button/Button';
import ButtonGroup from '../../components/button/ButtonGroup';
import Form from '../../components/form/Form';
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import Heading from '../../components/typography/Heading';
import Link from '../../components/typography/Link';
import LogoPage from '../logo-page/LogoPage';
import Paragraph from '../../components/typography/Paragraph';
import Strong from '../../components/typography/Strong';
import TextInput from '../../components/form/TextInput';
import atIds from '../../../at_ids';
import t from '../../utils/locales';
import './Login.css';

export default class Login extends Component {
  static propTypes = {
    /** Name of the application that appears in the header */
    application: PropTypes.string.isRequired,
    /** Background image that is behind the login form */
    backgroundImage: PropTypes.string.isRequired,
    /** An error message that will be placed on the page */
    error: PropTypes.string,
    /** Submit handler that will be called with the username and password */
    onSubmit: PropTypes.func.isRequired,
    /** Overall theme for the page, needs to be set when using a background image */
    theme: PropTypes.oneOf(['night', 'day']).isRequired,
  };

  static contextTypes = {
    axiomLanguage: PropTypes.string,
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
    const { application, error, ...rest } = this.props;
    const { username, password } = this.state;
    const { axiomLanguage } = this.context;

    return (
      <LogoPage { ...omit(rest, ['onSubmit']) }>
        <div className="ax-login">
          <Heading space="x4" textSize="display2">
            <Strong>{ application }</Strong>/ { t(axiomLanguage, 'login-title') }
          </Heading>

          <Form onSubmit={ e => this.handleSubmit(e) }>
            <TextInput
                data-ax-at={ atIds.Login.username }
                onChange={ e => this.handleUsernameChange(e) }
                placeholder={ t(axiomLanguage, 'username') }
                size="large"
                style="overlay"
                value={ username } />

            <TextInput
                data-ax-at={ atIds.Login.password }
                onChange={ e => this.handlePasswordChange(e) }
                placeholder={ t(axiomLanguage, 'password') }
                size="large"
                style="overlay"
                type="password"
                value={ password } />

            <Grid space="x4" verticalAlign="middle">
              <GridCell shrink>
                <ButtonGroup>
                  <Button
                      data-ax-at={ atIds.Login.submit }
                      full="small"
                      size="large"
                      type="submit">{ t(axiomLanguage, 'login-button') }</Button>
                </ButtonGroup>
              </GridCell>

              <GridCell>
                <Paragraph textCenter textRight="small">
                  <Link
                      data-ax-at={ atIds.Login.forgot }
                      href="https://app.brandwatch.com/login"
                      target="_blank">
                    <Strong>{ t(axiomLanguage, 'forgot-login') }</Strong>
                  </Link>
                </Paragraph>
              </GridCell>
            </Grid>
          </Form>

          { error && (
            <Paragraph space="x4" textColor="error">
              <Strong data-ax-at={ atIds.Login.error }>
                { error }
              </Strong>
            </Paragraph>
          ) }
        </div>
      </LogoPage>
    );
  }
}
