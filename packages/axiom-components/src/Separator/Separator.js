import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Separator.css';

export default class Separator extends Component {
  static propTypes = {
    borderStyle: PropTypes.oneOf(['solid', 'dotted']),
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
  };

  static defaultProps = {
    borderStyle: 'solid',
    direction: 'horizontal',
  };

  render() {
    const { borderStyle, direction, ...rest } = this.props;
    const classes = classnames('ax-separator', `ax-separator--${borderStyle}`, `ax-separator--${direction}`);

    return (
      <Base
          space="x0"
          { ...rest }
          Component="hr"
          className={ classes } />
    );
  }
}

