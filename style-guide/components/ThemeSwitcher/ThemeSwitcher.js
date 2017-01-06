import React, { Component } from 'react';
import { Paragraph, Link } from 'bw-axiom';

const THEME_LIGHT = 'dm-theme--light';
const THEME_DARK = 'dm-theme--dark';

function setTheme(theme) {
  document.body.classList.remove(THEME_LIGHT);
  document.body.classList.remove(THEME_DARK);
  document.body.classList.add(theme);
}

export default class ThemeSwitcher extends Component {
  render() {
    return (
      <Paragraph textCenter={ true } textSubtle={ true }>
        <Link inheritColor={ true } onClick={ () => setTheme(THEME_LIGHT) }>Light </Link>/
        <Link inheritColor={ true } onClick={ () => setTheme(THEME_DARK) }> Dark</Link>
      </Paragraph>
    );
  }
}
