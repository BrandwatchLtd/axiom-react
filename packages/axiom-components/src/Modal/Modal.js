import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Portal from '../Portal/Portal';
import './Modal.css';

const bodyOpenClassName = 'ax-modal__body--open';

const enableScrolling = () => {
  document.body.classList.remove(bodyOpenClassName);
};

const disableScrolling = () => {
  document.body.classList.add(bodyOpenClassName);
};

Modal.propTypes = {
  children: PropTypes.node,
  closeOnOverlayClick: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  overlayShade: PropTypes.oneOf(['shade-1', 'shade-2', 'shade-3', 'shade-4']),
  overlayTheme: PropTypes.oneOf(['day', 'night']),
  padding: PropTypes.oneOf(['x0', 'x6', 'x8', 'x12', 'x16']),
  shouldCloseOnEsc: PropTypes.bool,
};

export default function Modal({
  children,
  isOpen,
  onRequestClose,
  overlayShade = 'shade-2',
  overlayTheme,
  closeOnOverlayClick,
  padding = 'x6',
  shouldCloseOnEsc,
}) {

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape' && shouldCloseOnEsc) {
        onRequestClose();
        document.body.removeEventListener('keydown', handleEscapeKey, false);
      }
    }

    if (isOpen) {
      disableScrolling();
      if (shouldCloseOnEsc) {
        document.body.addEventListener('keydown', handleEscapeKey, false);
      }
    }

    return () => {
      enableScrolling();
      document.body.removeEventListener('keydown', handleEscapeKey, false);
    };
  }, [isOpen]);

  const classes = classnames(
    'ax-modal__container',
    `ax-modal__container--padding-${padding}`,
    {
      [`ax-modal__container--overlay-${overlayShade}`]: overlayShade,
    }
  );

  return isOpen ? (
    <Portal>
      <Base className={ classes } theme={ overlayTheme }>
        { closeOnOverlayClick && (
          <div className="ax-modal__mask" onClick={ onRequestClose } />
        ) }

        <div className="ax-modal">{ children }</div>
      </Base>
    </Portal>
  ) : null;
}
