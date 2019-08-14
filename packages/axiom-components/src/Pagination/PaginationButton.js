import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button/Button';

export default class PaginationButton extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    page: PropTypes.number,
    shape: PropTypes.string,
  };

  render() {
    const {
      active,
      onClick,
      page,
      shape,
      ...rest
    } = this.props;

    return (
      <Button { ...rest }
          onClick={ () => onClick(page) }
          shape={ shape || page <= 99 ? 'circle' : 'stadium' }
          size="small"
          style={ active ? 'primary' : 'quaternary' } />
    );
  }
}
