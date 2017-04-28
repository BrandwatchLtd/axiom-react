import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Small, Weak, Heading, Strong, Paragraph } from 'bw-axiom';
import './BarGroup.css';

export default class BarGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    ratio: PropTypes.string,
  };

  render() {
    const {
      children,
      label,
      ratio,
      ...rest
    } = this.props;

    return (
      <div { ...rest } className="ax-bar-chart__group">
        <div className="ax-bar-chart__group-bars">
          { children }
        </div>
        <div className="ax-bar-chart__group-label">
          { ratio && <Paragraph>
            <Small><Weak>{ ratio }%</Weak></Small>
          </Paragraph> }
          <Heading><Strong>{label}</Strong></Heading>
        </div>
      </div>
    );
  }
}
