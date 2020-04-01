import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Grid, Heading } from '@brandwatch/axiom-components';
import './ColorGrid.css';

export default class ColorGrid extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
  };

  render() {
    const { children, name, ...rest } = this.props;

    return (
      <Base {...rest} space="x8">
        {name && (
          <Heading space="x4" textSize="headtitle" textStrong>
            {name}
          </Heading>
        )}

        <Grid gutters="large" responsive={false} shrink>
          {children}
        </Grid>
      </Base>
    );
  }
}
