import React, { PropTypes, Component } from 'react';
import { Small } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./DemoBox.scss');
}

export default class DemoBox extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="dm-demo-box">
        <Small textCase="capital">{ children }</Small>
      </div>
    );
  }
}
