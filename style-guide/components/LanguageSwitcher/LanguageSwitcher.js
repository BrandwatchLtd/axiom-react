import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Paragraph, Link } from 'bw-axiom';


export default class ThemeSwitcher extends Component {
  static propTypes = {
    onSwitchLanguage: PropTypes.func.isRequired,
  };

  render() {
    const { onSwitchLanguage } = this.props;

    return (
      <Paragraph textCenter textColor="subtle">
        <Link
            onClick={ () => onSwitchLanguage('en') }
            style="subtle"
            title="English">en</Link>/
        <Link
            onClick={ () => onSwitchLanguage('de') }
            style="subtle"
            title="German">de</Link>/
        <Link
            onClick={ () => onSwitchLanguage('es') }
            style="subtle"
            title="Spanish">es</Link>/
        <Link
            onClick={ () => onSwitchLanguage('fr') }
            style="subtle"
            title="French">fr</Link>
      </Paragraph>
    );
  }
}

