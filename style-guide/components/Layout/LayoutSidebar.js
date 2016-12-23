import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import GithubLink from '../GithubLink/GithubLink';

if (__INCLUDE_CSS__) {
  require('./LayoutSidebar.scss');
}

export default class LayoutSidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'dm-layout__sidebar');

    return (
      <div className={ classes }>
        <div className="dm-layout__sidebar-body">
          { children }
        </div>

        <div className="dm-layout__sidebar-footer">
          <GithubLink />
        </div>
      </div>
    );
  }
}
