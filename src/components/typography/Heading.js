import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Heading.css';

const TAG_MAP = {
  display: 'h1',
  display2: 'h2',
  headline: 'h3',
  title: 'h4',
  large: 'h5',
};

export default class Heading extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOf(['display', 'display2', 'headline', 'title', 'large']),
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
      <Base space="tiny" { ...rest } Component={ TAG_MAP[style] } className={ classes } />
    );
  }
}
