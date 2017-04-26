import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Heading, Weak } from 'bw-axiom';
import './Stat.css';

export default class Stat extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]),
  };

  render() {
    const { children, color, ...rest } = this.props;
    const classes = classnames('ax-stat-cards__stat', {
      [`ax-stat-cards__stat--${color}`]: color,
    });

    return (
      <Base { ...rest }
          Component="li"
          className={ classes }>
        <Heading style="headline">
          <Weak>{ children }</Weak>
        </Heading>
      </Base>
    );
  }
}
