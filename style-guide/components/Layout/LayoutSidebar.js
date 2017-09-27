import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GithubLink from '../GithubLink/GithubLink';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default class LayoutSidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSwitchLanguage: PropTypes.func.isRequired,
  };

  render() {
    const { children, onSwitchLanguage } = this.props;

    return (
      <div className="dm-layout__sidebar">
        <div className="dm-layout__sidebar-body">
          { children }
        </div>

        <div className="dm-layout__sidebar-footer">
          <LanguageSwitcher onSwitchLanguage={ onSwitchLanguage } />
          <ThemeSwitcher />
          <GithubLink />
        </div>
      </div>
    );
  }
}
