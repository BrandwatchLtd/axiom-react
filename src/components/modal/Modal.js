import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Subtree from '../subtree/Subtree';
import './Modal.css';

const bodyOpenClassName = 'ax-modal__body--open';

const enableScrolling = () => {
  document.body.classList.remove(bodyOpenClassName);
};

const disableScrolling = () => {
  document.body.classList.add(bodyOpenClassName);
};

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    withOverlay: PropTypes.bool,
    onOverlayClick: PropTypes.func,
  };

  static defaultProps = {
    withOverlay: true,
  };

  constructor(props) {
    super(props);
    this.subtree = this.subtree.bind(this);
  }

  subtree() {
    const { children, withOverlay, onOverlayClick } = this.props;
    const classes = classnames('ax-modal__container', {
      'ax-modal__container--overlay': withOverlay,
    });

    return (
      <div className={ classes }>
        { onOverlayClick && (
          <div className="ax-modal__mask" onClick={ onOverlayClick } />
        ) }

        <div className="ax-modal">
          { children }
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;

    return (
      <Subtree
          isRendered={ isOpen }
          onSubtreeRender={ disableScrolling }
          onSubtreeUnrender={ enableScrolling }
          subtree={ this.subtree } />
    );
  }
}
