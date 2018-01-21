import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component, isValidElement } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Base from '../base/Base';
import './Context.css';

/* eslint-disable react/no-find-dom-node */
export default class Context extends Component {
  static propTypes = {
    /** React reference function for the arrow element */
    arrowRef: PropTypes.func,
    /** Content to be inserted in the contextual area */
    children: PropTypes.node,
    /** Maximum height for the content area, exceeding this will make it scrollable */
    maxHeight: PropTypes.string,
    /** Position of the content area relative to the arrow */
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /** Total width of the component */
    width: PropTypes.string,
  };

  static defaultProps = {
    maxHeight: '30rem',
    position: 'top',
    width: '14.5rem',
  };

  static childContextTypes = {
    scrollIntoView: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      scrollIntoView: (target) => this.scrollIntoView(target),
    };
  }

  scrollIntoView(target) {
    const { top, height } = this.element.getBoundingClientRect();
    const { top: targetTop, height: targetHeight } = target.getBoundingClientRect();
    const bottomOffset = (targetTop + targetHeight) - (top + height);
    const topOffset = top - targetTop;

    if (bottomOffset > 0) {
      this.element.scrollTop += bottomOffset;
    } else if (topOffset > 0) {
      this.element.scrollTop -= topOffset;
    }
  }

  render() {
    const {
      arrowRef,
      children,
      maxHeight,
      position,
      width,
      ...rest
    } = this.props;

    const classes = classnames('ax-context', `ax-context--${position}`);

    return (
      <Base theme="day" { ...rest } className={ classes } style={ { width } }>
        { arrowRef && (
          <span className="ax-context__arrow" ref={ arrowRef } />
        ) }

        <div
            className="ax-context__content"
            ref={ element => {
              const node = ReactDOM.findDOMNode(element);
              this.element = (node) ? node : this.element;
            } }
            style={ { maxHeight } }>
          { Children.map(children, (child, index) =>
            isValidElement(child) ? cloneElement(child, { index: index.toString() } ) : child,
          ) }
        </div>
      </Base>
    );
  }
}
