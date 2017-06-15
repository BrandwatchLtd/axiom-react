import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Heading, Weak } from 'bw-axiom';
import './ExampleHeader.css';

export default class ExampleHeader extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const { name } = this.props;

    return (
      <div className="dm-example-header">
        <Heading style="display" textCase="capital">
          <Weak>{ name }</Weak>
        </Heading>
      </div>
    );
  }
}
