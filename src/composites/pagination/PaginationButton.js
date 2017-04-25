import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from 'bw-axiom';

export default class PaginationButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    circular: PropTypes.string,
    page: PropTypes.number,
    onClick: PropTypes.func,
  };

  render() {
    const {
      active,
      circular,
      onClick,
      page,
      ...rest
    } = this.props;

    return (
      <Button { ...rest }
          circular={ circular || page <= 99 ? 'small' : undefined }
          onClick={ () => onClick(page) }
          stadium={ !circular && page > 99 ? 'small': undefined }
          style={ active ? 'primary' : 'quaternary' } />
    );
  }
}
