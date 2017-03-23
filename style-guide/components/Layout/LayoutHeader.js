import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Grid, GridCell, Icon, Link, Heading  } from 'bw-axiom/';

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
            <Heading style="title">{ children }</Heading>
          </GridCell>

          <GridCell shrink={ true } visibleUntil="small">
            <Link onClick={ toggleSidebar } style="subtle">
              <Icon name="ellipsis" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}
