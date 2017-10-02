import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Heading, Paragraph, Link, Strong } from 'bw-axiom';


export default class ThemeSwitcher extends Component {
  static propTypes = {
    onSwitchLanguage: PropTypes.func.isRequired,
  };

  render() {
    const { onSwitchLanguage } = this.props;

    return (
      <Base space="x2" textCenter>
        <Heading space="x0"><Strong>Language</Strong></Heading>
        <Paragraph space="x0" textColor="subtle">
          <Link
              onClick={ () => onSwitchLanguage('en') }
              style="subtle"
              title="English">EN </Link>/
          <Link
              onClick={ () => onSwitchLanguage('de') }
              style="subtle"
              title="German"> DE </Link>/
          <Link
              onClick={ () => onSwitchLanguage('es') }
              style="subtle"
              title="Spanish"> ES </Link>/
          <Link
              onClick={ () => onSwitchLanguage('fr') }
              style="subtle"
              title="French"> FR</Link>
        </Paragraph>
      </Base>
    );
  }
}

