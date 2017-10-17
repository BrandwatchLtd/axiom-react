import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Portal from '../portal/Portal';
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
    onOverlayClick: PropTypes.func,
    withOverlay: PropTypes.bool,
  };

  static defaultProps = {
    withOverlay: true,
  };

  componentDidMount() {
    if (this.props.isOpen) {
      disableScrolling();
    }
  }

  componentWillUnmount() {
    enableScrolling();
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }

  render() {
    const { children, isOpen, withOverlay, onOverlayClick } = this.props;
    const classes = classnames('ax-modal__container', {
      'ax-modal__container--overlay': withOverlay,
    });

    return isOpen ? (
      <Portal>
        <div className={ classes }>
          { onOverlayClick && (
            <div className="ax-modal__mask" onClick={ onOverlayClick } />
          ) }

          <div className="ax-modal">
            { children }
          </div>
        </div>
      </Portal>
    ) : null;
  }
}
