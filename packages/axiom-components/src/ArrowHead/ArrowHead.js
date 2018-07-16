import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import Base from '../Base/Base';
import './ArrowHead.css';

/* eslint-disable react/no-find-dom-node */
export default class ArrowHead extends Component {
  static propTypes = {
    /** Contents to be displayed in the arrow container */
    children: PropTypes.node.isRequired,
    /** Background color for the arrow */
    color: PropTypes.string.isRequired,
    /** Sets the direction where the arrow points */
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Relative position of the arrow with respect to the left or top depending on the position
     * The value should be between 0 and 1*/
    position: PropTypes.number.isRequired,
  };

  static defaultProps = {
    direction: 'top',
    position: 0.15,
    color: 'black',
  };

  state = {
    containerOffset: 0,
    relativePosition: 0,
  };

  updateArrowPlacement = () => {
    const { direction } = this.props;
    const contentTop = this._content.getBoundingClientRect()[direction];
    const arrow = this._arrow.getBoundingClientRect();

    if (direction === 'top' || direction === 'bottom') {

      return this.setState({ containerOffset: contentTop - (arrow[direction] + arrow.height) });
    }

    this.setState({ containerOffset: contentTop - (arrow[direction] + arrow.width) });
  };

  updateArrowPosition = (position, direction) => {
    const content = this._content.getBoundingClientRect();
    const arrow = this._arrow.getBoundingClientRect();

    if (direction === 'top' || direction === 'bottom') {

      return this.setState({
        relativePosition: (position * content.width) - (position * arrow.width),
      });
    }

    this.setState({
      relativePosition: (position * content.height) - (position * arrow.height),
    });
  };

  componentDidMount() {
    if (this._content && this._arrow) {
      const { position, direction } = this.props;
      this.updateArrowPlacement();
      this.updateArrowPosition(position, direction);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { position, direction } = nextProps;

    this.updateArrowPosition(position, direction);
  }

  getArrowStyles = () => {
    const { color, direction } = this.props;
    const containerOffset = `${this.state.containerOffset}px`;
    const relativePosition = `${this.state.relativePosition}px`;

    switch (direction) {
    case 'top':
      return { left: relativePosition, borderBottomColor: color, top: containerOffset };
    case 'bottom':
      return { left: relativePosition, borderTopColor: color, bottom: containerOffset };
    case 'left':
      return { top: relativePosition, borderRightColor: color, left: containerOffset };
    case 'right':
      return { top: relativePosition, borderLeftColor: color, right: containerOffset };
    }
  };

  render() {
    const { children, direction, ...rest } = this.props;

    const arrowClasses = classnames('ax-arrow-head--arrow', {
      'ax-arrow-head--arrow--top': direction === 'top',
      'ax-arrow-head--arrow--left': direction === 'left',
      'ax-arrow-head--arrow--right': direction === 'right',
      'ax-arrow-head--arrow--bottom': direction === 'bottom',
    });

    return (
      <Base { ...rest }>
        <Base className={ arrowClasses } ref={ (node) => {
          this._arrow = findDOMNode(node);
        } } style={ this.getArrowStyles() }/>
        <Base ref={ (node) => {
          this._content = findDOMNode(node);
        } }>
          { children }
        </Base>
      </Base>
    );
  }
}
