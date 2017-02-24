import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Heading.scss');
}

const TAG_MAP = {
  display: 'h1',
  headline: 'h2',
  title: 'h3',
  large: 'h4',
};

export default class Heading extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOf(['display', 'headline', 'title', 'large']),
    underline: PropTypes.bool,
  };

  static defaultProps = {
    style: 'large',
  };

  render() {
    const { underline, style, ...rest } = this.props;
    const classes = classnames('ax-heading', `ax-heading--${style}`, {
      'ax-heading--underline': underline,
    });

    return (
      <Base { ...rest } Component={ TAG_MAP[style] } className={ classes } />
    );
  }
}
