import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './HorizontalRule.css';

export default class HorizontalRule extends Component {
  static propTypes = {
    borderStyle: PropTypes.oneOf(['solid', 'dotted']),
  };

  static defaultProps = {
    borderStyle: 'solid',
  };

  render() {
    const { borderStyle, ...rest } = this.props;
    const classes = classnames('ax-horizontal-rule', `ax-horizontal-rule--${borderStyle}`);

    return (
      <Base
          space="x0"
          { ...rest }
          Component="hr"
          className={ classes } />
    );
  }
}

