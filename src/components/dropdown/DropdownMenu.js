import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import ContextMenu from '../context/ContextMenu';

export default class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.string,
  };

  static defaultProps = {
    index: '0',
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextMenu { ...rest }>
        { Children.map(children, (child, index) =>
          cloneElement(child, {
            index: `${ this.props.index }${ index }`,
          })
        ) }
      </ContextMenu>
    );
  }
}
