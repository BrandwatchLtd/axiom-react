import React, { Component, PropTypes } from 'react';
// import classnames from 'classnames';
// import { Strong } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ColorSwatch.scss');
}

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    // const { colors } = this.props;

    return (
      <div>

      </div>
    );
  }
}
