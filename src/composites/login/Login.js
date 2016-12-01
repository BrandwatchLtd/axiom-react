import React, { Component, PropTypes } from 'react';
import LogoVertical from '../../components/logo/LogoVertical';
import Button from '../../components/button/Button';
import ButtonGroup from '../../components/button/ButtonGroup';
import Form from '../../components/form/Form';
import TextInput from '../../components/form/TextInput';
import Link from '../../components/typography/Link';
import Paragraph from '../../components/typography/Paragraph';

if (__INCLUDE_CSS__) {
  require('./Login.scss');
}

export default class Login extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string.isRequired,
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
    const { backgroundImage } = this.props;
    const { username, password } = this.state;
    const style = { backgroundImage: `url(${backgroundImage})` };

    return (
      <div className="ax-login" style={ style }>
        <div className="ax-login__header">
          <div className="ax-login__header-container">
            <div className="ax-login__logo">
              <LogoVertical height={ 140 }/>
            </div>
          </div>
        </div>

        <div className="ax-login__body">
          <div className="ax-login__form">
            <Form onSubmit={ ::this.handleSubmit } textLight={ true }>
              <TextInput
                  label="Username"
                  onChange={ ::this.handleUsernameChange }
                  placeholder="Username"
                  style="translucent"
                  value={ username } />

              <TextInput
                  label="Password"
                  onChange={ ::this.handlePasswordChange }
                  placeholder="Password"
                  style="translucent"
                  type="password"
                  value={ password } />
              <ButtonGroup>
                <Button size="large" type="submit">Login</Button>
              </ButtonGroup>
            </Form>
          </div>
        </div>

        <div className="ax-login__footer">
          <Paragraph textLight={ true } textRight={ true }>
            Forgotten your Brandwatch password? <Link href="https://app.brandwatch.com/login">
            Reset it here. </Link>
          </Paragraph>
        </div>
      </div>
    );
  }
}
