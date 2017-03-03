import React, { Component } from 'react';
import { ProgressInfinite } from 'bw-axiom';

export default class ChartBodyContent extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '6rem',
    };

    return (
      <div style={ containerStyle }>
        <ProgressInfinite />
      </div>
    );
  }
}
