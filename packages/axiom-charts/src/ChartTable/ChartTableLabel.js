import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
import classnames from 'classnames';

export default class ChartTableLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isFaded: PropTypes.bool,
    width: PropTypes.string.isRequired,
  };

  render() {
    const { children, width, isFaded = false, ...rest } = this.props;
    const classes = classnames('ax-chart-table__label', {
      'ax-chart-table__label--faded': isFaded,
    });

    return (
      <Base { ...rest } className={ classes } style={ { width } }>
        { children }
      </Base>
    );
  }
}
