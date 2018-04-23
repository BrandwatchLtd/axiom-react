import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { animations } from '@brandwatch/axiom-materials';
import { Base } from '@brandwatch/axiom-components';
import './Transition.css';

export default class Transition extends Component {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.previousIndex = props.activeIndex;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.previousIndex = this.props.activeIndex;
    }
  }

  render() {
    const {
      activeIndex,
      children,
      height,
      width,
      ...rest
    } = this.props;

    const directionNext = this.previousIndex < activeIndex;
    const duration = animations.transitionTimeSlow;
    const className = directionNext ? 'ax-animate-next' : 'ax-animate-previous';
    const style = {
      animationDuration: `${duration}ms`,
    };

    // https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9
    const childFactoryCreator = (classNames) => (
      (child) => (
        React.cloneElement(child, {
          classNames,
        })
      )
    );

    return (
      <TransitionGroup
          childFactory={ childFactoryCreator(className) }
          className="ax-transition__wrapper"
          component={ Base }
          style={ { height, width } }
          { ...rest }>
        <CSSTransition classNames={ className } key={ activeIndex } timeout={ duration }>
          <div className="ax-transition__item" style={ style }>
            { children[activeIndex] }
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
