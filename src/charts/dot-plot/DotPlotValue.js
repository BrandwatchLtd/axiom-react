import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../../components/base/Base';
import Small from '../../components/typography/Small';

export default class DotPlotValue extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { hidden, value, ...rest } = this.props;
    const classes = classnames('ax-dot-plot__value', {
      'ax-dot-plot__value--hidden': hidden,
    });

    return (
      <Base { ...rest }
          className={ classes }
          style={ { left: `${value}%` } }>
        <Small>{ value }%</Small>
      </Base>
    );
  }
}
