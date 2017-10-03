import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as AxiomLink } from 'bw-axiom';

export default class Link extends Component {
  static propTypes = {
    to: PropTypes.string,
  };

  render() {
    const { to, ...rest } = this.props;

    return to === undefined
      ? <AxiomLink { ...rest } />
      : <AxiomLink { ...rest } Component={ RouterLink } to={ to } />;
  }
}
