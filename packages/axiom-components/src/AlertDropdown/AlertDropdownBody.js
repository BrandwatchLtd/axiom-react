import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Base from '../Base/Base';

class AlertDropdownBody extends Component {
  static propTypes = {
    /**
     * Children inside AlertDropdownBody
     */
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Base className="ax-alert-dropdown__body">
        { this.props.children }
      </Base>
    );
  }
}

export default AlertDropdownBody;
