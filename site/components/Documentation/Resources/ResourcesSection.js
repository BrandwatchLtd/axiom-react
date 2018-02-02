import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Heading } from '@brandwatch/axiom-components';

export default class ResourcesSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, description, title, ...rest } = this.props;

    return (
      <Base { ...rest } space="x8">
        <Heading textSize="headtitle">{ title }</Heading>
        <Heading>{ description }</Heading>
        { children }
      </Base>
    );
  }
}
