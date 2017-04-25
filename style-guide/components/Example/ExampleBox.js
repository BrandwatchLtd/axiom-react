import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Heading } from 'bw-axiom';
import './ExampleBox.css';

export default class ExampleBox extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string,
  };

  render() {
    const { children, name } = this.props;

    return (
      <div className="dm-example-box">
        <Heading space="medium" style="title">{ name }</Heading>

        { children }
      </div>
    );
  }
}
