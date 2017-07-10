import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'bw-axiom';

const TAG_MAP = {
  display2: 'h1',
  display1: 'h2',
  headline: 'h3',
  headtitle: 'h4',
  large: 'h5',
  label: 'h6',
};

export default class Heading extends Component {
  static propTypes = {
    textSize: PropTypes.oneOf([
      'display2',
      'display1',
      'headline',
      'headtitle',
      'large',
      'label',
    ]),
  };

  static defaultProps = {
    textSize: 'large',
  };

  render() {
    const { textSize, ...rest } = this.props;

    return (
      <Text space="x2" { ...rest } Component={ TAG_MAP[textSize] } textSize={ textSize } />
    );
  }
}
