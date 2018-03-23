import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TomGridItem extends Component {

  static propTypes = {
    children: PropTypes.node,
    columnSpan: PropTypes.number,
    columnStart: PropTypes.number,
    full: PropTypes.bool,
  }

  render() {
    const {
      children,
      columnSpan,
      columnStart,
      full,
    } = this.props;

    const classes = classnames('ax-tom-grid-item', {
      ['ax-tom-grid-item--full']: full,
    });

    const gridItemStyle = full ? null : {
      gridColumnEnd: columnSpan ? `span ${columnSpan}` : 'auto',
      gridColumnStart: columnStart ? columnStart : 'auto',
    };

    return (<div className={ classes } style={ gridItemStyle }>
      { children }
    </div>);
  }
}
