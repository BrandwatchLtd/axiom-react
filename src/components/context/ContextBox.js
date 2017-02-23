import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextBox.scss');
}

export default class ContextBox extends Component {
  static propTypes = {
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    padding: 'large',
  };

  render() {
    const { padding, ...rest } = this.props;
    const classes = classnames('ax-context-box',
      `ax-context-box--padding-${padding}`,
    );

    return (
      <Base { ...rest } className={ classes }>

      </Base>
    );
  }
}
