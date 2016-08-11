import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Icon from 'bw-axiom/components/icon/Icon';
import Heading from 'bw-axiom/components/typography/Heading';
import Link from 'bw-axiom/components/typography/Link';

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
          <GridCell visibleUntil="sm">
            <Heading level={ 3 }>{ children }</Heading>
          </GridCell>

          <GridCell hiddenUntil="sm">
            <Heading level={ 2 }>{ children }</Heading>
          </GridCell>

          <GridCell shrink={ true } visibleUntil="sm">
            <Link inheritColor={ true } noDecoration={ true } onClick={ toggleSidebar } >
              <Icon name="bars" size="lg" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}
