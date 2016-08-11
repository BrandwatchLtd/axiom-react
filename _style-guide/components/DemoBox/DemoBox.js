import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./DemoBox.scss');
}

export default class DemoBox extends Component {
  static propTypes = {
    attention: PropTypes.bool,
    children: PropTypes.any,
  };

  render() {
    const { children, attention } = this.props;
    const classes = classnames('dm-demo-box', {
      'dm-demo-box--attention': attention,
    });

    return (
      <div className={ classes }>
        <span>{ children }</span>
      </div>
    );
  }
}
