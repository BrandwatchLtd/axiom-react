import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement, isValidElement } from 'react';
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
        { Children
            .toArray(children)
            .map((child, index) =>
              isValidElement(child) ? cloneElement(child, {
                index: `${ this.props.index }${ index }`,
              }) : child
          )
        }
      </ContextMenu>
    );
  }
}
