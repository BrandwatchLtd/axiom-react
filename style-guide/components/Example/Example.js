import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Heading } from 'bw-axiom';
import './Example.css';

export default class Example extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, children } = this.props;

    return (
      <div className="dm-example">
        <Heading space="medium" style="title">{ name }</Heading>

        { children }
      </div>
    );
  }
}
