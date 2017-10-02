import React, { Component } from 'react';
import { Base, Heading, Paragraph, Link, Strong } from 'bw-axiom';

const THEME_LIGHT = 'ax-theme--light';
const THEME_DARK = 'ax-theme--dark';

function setTheme(theme) {
  document.documentElement.classList.remove(THEME_LIGHT);
  document.documentElement.classList.remove(THEME_DARK);
  document.documentElement.classList.add(theme);
}

export default class ThemeSwitcher extends Component {
  render() {
    return (
      <Base space="x2" textCenter>
        <Heading space="x0"><Strong>Theme</Strong></Heading>
        <Paragraph space="x0" textColor="subtle">
          <Link
              onClick={ () => setTheme(THEME_LIGHT) }
              style="subtle">Light </Link>/
          <Link
              onClick={ () => setTheme(THEME_DARK) }
              style="subtle"> Dark</Link>
        </Paragraph>
      </Base>
    );
  }
}
