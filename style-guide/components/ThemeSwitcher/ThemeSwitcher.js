import React, { Component } from 'react';
import { Base, Heading, Paragraph, Link, Strong } from 'bw-axiom';

const THEME_DAY = 'ax-theme--day';
const THEME_NIGHT = 'ax-theme--night';

function setTheme(theme) {
  document.documentElement.classList.remove(THEME_DAY);
  document.documentElement.classList.remove(THEME_NIGHT);
  document.documentElement.classList.add(theme);
}

export default class ThemeSwitcher extends Component {
  render() {
    return (
      <Base space="x2" textCenter>
        <Heading space="x0"><Strong>Theme</Strong></Heading>
        <Paragraph space="x0" textColor="subtle">
          <Link
              onClick={ () => setTheme(THEME_DAY) }
              style="subtle">Day </Link>/
          <Link
              onClick={ () => setTheme(THEME_NIGHT) }
              style="subtle"> Night</Link>
        </Paragraph>
      </Base>
    );
  }
}
