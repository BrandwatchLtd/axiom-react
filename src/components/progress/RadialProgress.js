import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./RadialProcess.scss');
}

export default class RadialProgress extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const { children, className, size, ...rest } = this.props;
    const classes = classnames(
      'ax-radial-progress',
      `ax-radial-progress--${size}`,
      className,
    );

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
