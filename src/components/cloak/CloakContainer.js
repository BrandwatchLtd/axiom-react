import React, { Component } from 'react';
import Base from '../base/Base';

export default class CloakContainer extends Component {
  render() {
    return (
      <Base cloakContainer { ...this.props } />
    );
  }
}
