import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, LogoTab } from '@brandwatch/axiom-components';
import './LogoPage.css';

const LOGO_HEIGHT = '7.75rem';
const LOGO_COLOR_MAP = {
  night: 'grey',
  day: 'white',
};

export default class LogoPage extends Component {
  static propTypes = {
    /** Page background image URL */
    backgroundImage: PropTypes.string,
    /** Content to be placed under the Logo */
    children: PropTypes.node.isRequired,
    /** Overall theme for the page, needs to be set when using a background image */
    theme: PropTypes.oneOf(['night', 'day']).isRequired,
  };

  render() {
    const { backgroundImage, children, theme, ...rest } = this.props;
    const classes = classnames('ax-logo-page', `ax-logo-page--${theme}`);
    const style = {
      backgroundImage: backgroundImage && `url(${backgroundImage})`,
      paddingBottom: LOGO_HEIGHT,
    };

    return (
      <Base {...rest} className={classes} style={style} theme={theme}>
        <div className="ax-logo-page__header">
          <LogoTab color={LOGO_COLOR_MAP[theme]} height={LOGO_HEIGHT} />
        </div>

        <div className="ax-logo-page__body">{children}</div>
      </Base>
    );
  }
}
