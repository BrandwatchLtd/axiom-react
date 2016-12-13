import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Grid, GridCell, Icon, Heading, Link } from 'bw-axiom/';

if (__INCLUDE_CSS__) {
  require('./LayoutHeader.scss');
}

export default class LayoutHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { toggleSidebar } = this.context;
    const classes = classnames(className, 'dm-layout__header');

    return (
      <header className={ classes }>
        <Grid responsive={ false } vAlign="middle">
          <GridCell>
            <Heading>{ children }</Heading>
          </GridCell>

          <GridCell shrink={ true } visibleUntil="small">
            <Link inheritColor={ true } noDecoration={ true } onClick={ toggleSidebar } >
              <Icon name="ellipsis" size="large" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}
