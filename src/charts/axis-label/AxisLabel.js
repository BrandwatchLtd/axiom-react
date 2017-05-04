import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Small, Strong, Weak, Heading, Paragraph } from 'bw-axiom';
import './AxisLabel.css';

export default class AxisLabel extends Component {
  static propTypes = {
    mainLabel: PropTypes.string.isRequired,
    secondLabel: PropTypes.string,
  };

  render() {
    const {
      mainLabel,
      secondLabel,
      ...rest
    } = this.props;

    return (
      <div { ...rest } className="ax-axis-labels--wrapper">
        { secondLabel && <Paragraph>
          <Small><Weak>{ secondLabel }</Weak></Small>
        </Paragraph> }
        <Heading><Strong>{ mainLabel }</Strong></Heading>
      </div>
    );
  }
}