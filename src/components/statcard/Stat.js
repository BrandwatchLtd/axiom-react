import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import Heading from '../typography/Heading';
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
        <Heading textSize="headline">{ children }</Heading>
      </Base>
    );
  }
}
