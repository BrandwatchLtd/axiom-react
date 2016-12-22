import React, { Component, PropTypes } from 'react';
import Base from '../../components/base/Base';
import LogoVertical from '../../components/logo/LogoVertical';
import Button from '../../components/button/Button';
import ButtonGroup from '../../components/button/ButtonGroup';
import Form from '../../components/form/Form';
import TextInput from '../../components/form/TextInput';
import Link from '../../components/typography/Link';
import Paragraph from '../../components/typography/Paragraph';
import Heading from '../../components/typography/Heading';
import Weak from '../../components/typography/Weak';

if (__INCLUDE_CSS__) {
  require('./Login.scss');
}

export default class Login extends Component {
  static propTypes = {
    application: PropTypes.string.isRequired,
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
    const { application, backgroundImage, ...rest } = this.props;
    const { username, password } = this.state;
    const style = { backgroundImage: `url(${backgroundImage})` };

    return (
      <Base { ...rest } className="ax-login" style={ style }>
        <div className="ax-login__header">
          <div className="ax-login__header-container">
            <div className="ax-login__logo">
              <LogoVertical height={ 140 } />
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
