import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="li" className="ax-list__item">
        { children }
      </Base>
    );
  }
}
