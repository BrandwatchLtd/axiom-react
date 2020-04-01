import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onOverlayClick: PropTypes.func,
    overlayShade: PropTypes.oneOf(['shade-1', 'shade-2', 'shade-3', 'shade-4']),
    overlayTheme: PropTypes.oneOf(['day', 'night']),
    padding: PropTypes.oneOf(['x0', 'x6', 'x8', 'x12', 'x16']),
    shouldCloseOnEsc: PropTypes.bool,
  };

  static defaultProps = {
    overlayShade: 'shade-2',
    padding: 'x6',
  };

  constructor(props) {
    super(props);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      disableScrolling();
    }
    if (this.props.shouldCloseOnEsc) {
      document.body.addEventListener('keydown', this.handleEscapeKey, false);
    }
  }

  componentWillUnmount() {
    enableScrolling();
    if (this.props.shouldCloseOnEsc) {
      document.body.removeEventListener('keydown', this.handleEscapeKey, false);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      disableScrolling();
    } else if (prevProps.isOpen && !this.props.isOpen) {
      enableScrolling();
    }

    if (this.props.shouldCloseOnEsc !== prevProps.shouldCloseOnEsc) {
      this.toggleEscapeEventListener();
    }
  }

  toggleEscapeEventListener() {
    if (this.props.shouldCloseOnEsc) {
      document.body.addEventListener('keydown', this.handleEscapeKey, false);
    } else {
      document.body.removeEventListener('keydown', this.handleEscapeKey, false);
    }
  }

  handleEscapeKey(event) {
    const { onOverlayClick, shouldCloseOnEsc } = this.props;

    if (event.key === 'Escape' && shouldCloseOnEsc) {
      if (onOverlayClick) {
        onOverlayClick();
      }
    }
  }

  render() {
    const {
      children,
      isOpen,
      overlayShade,
      overlayTheme,
      onOverlayClick,
      padding,
    } = this.props;

    const classes = classnames(
      'ax-modal__container',
      `ax-modal__container--padding-${padding}`,
      {
        [`ax-modal__container--overlay-${overlayShade}`]: overlayShade,
      }
    );

    return isOpen ? (
      <Portal>
        <Base className={classes} theme={overlayTheme}>
          {onOverlayClick && (
            <div className="ax-modal__mask" onClick={onOverlayClick} />
          )}

          <div className="ax-modal">{children}</div>
        </Base>
      </Portal>
    ) : null;
  }
}
