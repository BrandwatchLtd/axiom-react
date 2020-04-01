import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class DotPlotDifferenceLine extends Component {
  static propTypes = {
    faded: PropTypes.bool,
    from: PropTypes.number,
    height: PropTypes.string,
    hidden: PropTypes.bool,
    to: PropTypes.number,
    width: PropTypes.string,
  };

  static defaultProps = {
    from: 0,
    height: '0.75rem',
    to: 100,
    width: '100%',
  };

  render() {
    const {
      faded,
      from: fromX,
      height,
      hidden,
      to,
      width,
      ...rest
    } = this.props;

    const style = { height, width };
    const lineStyle = { left: `${fromX}%`, right: `${100 - to}%` };
    const classes = classnames('ax-dot-plot__difference-line', {
      'ax-dot-plot__difference-line--faded': faded,
      'ax-dot-plot__difference-line--hidden': hidden,
    });

    return (
      <div {...rest} className={classes} style={style}>
        <div className="ax-dot-plot__difference-line-path" style={lineStyle} />
      </div>
    );
  }
}
