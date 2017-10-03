import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, GridCell, Icon, Link, Heading  } from 'bw-axiom';

export default class LayoutHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    const { toggleSidebar } = this.context;

    return (
      <header className="dm-layout__header">
        <Grid responsive={ false } verticalAlign="middle">
          <GridCell>
            <Heading textSize="headtitle">{ children }</Heading>
          </GridCell>

          <GridCell shrink visibleUntil="small">
            <Link onClick={ toggleSidebar } style="subtle">
              <Icon name="ellipsis" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}
