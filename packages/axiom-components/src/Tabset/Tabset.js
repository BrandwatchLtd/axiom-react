import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import omit from 'lodash.omit';
import { isComponent } from '@brandwatch/axiom-utils';
import Base from '../Base/Base';
import Tabs from './Tabs';
import { TabRef } from './Tab';

export default class Tabset extends Component {
  static propTypes = {
    /**
     * Initial activated Tab, after initial mount Tabset takes control of
     * the activated Tabs.
     */
    activeTabIndex: PropTypes.number,
    /** Tabs */
    children: PropTypes.node,
    /** Size control for the Tabs */
    size: PropTypes.oneOf(['medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: props.activeTabIndex || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children.length !== this.props.children.length) {
      this.setState({ activeTabIndex: 0 });
    }
  }

  activateTab(index = 0) {
    this.setState({
      activeTabIndex: index,
    });
  }

  render() {
    const { children, size, ...rest } = this.props;
    const { activeTabIndex } = this.state;
    const arrayChildren = Children.toArray(children);
    const activeTabContent = arrayChildren[activeTabIndex]
      ? arrayChildren[activeTabIndex].props.children
      : null;

    const tabs = arrayChildren
      .filter((child) => isComponent(child, TabRef))
      .map((child, index) => cloneElement(child, {
        active: index === activeTabIndex,
        onClick: () => this.activateTab(index),
      }));

    return (
      <Base space="x6" { ...omit(rest, ['activeTabIndex']) }>
        <Tabs size={ size }>{ tabs }</Tabs>
        <Base space="x6">
          { activeTabContent }
        </Base>
      </Base>
    );
  }
}
