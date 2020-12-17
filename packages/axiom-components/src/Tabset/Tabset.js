import PropTypes from "prop-types";
import React, { Component, Children, cloneElement } from "react";
import omit from "lodash.omit";
import { isComponent } from "@brandwatch/axiom-utils";
import Base from "../Base/Base";
import Tabs from "./Tabs";
import { TabRef } from "./Tab";

/**
 * Tabsets are useful to alternate between related views within the same context.
 */
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
    size: PropTypes.oneOf(["medium", "large"]),
    /** Vertical spacing between elements */
    space: PropTypes.string,
  };

  static defaultProps = {
    size: "medium",
    space: "x6",
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: props.activeTabIndex || 0,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.children.length !== this.props.children.length) {
      this.setState({ activeTabIndex: 0 });
    }
  }

  activateTab(index = 0, onClick, ...args) {
    this.setState({
      activeTabIndex: index,
    });

    if (onClick) {
      onClick(...args);
    }
  }

  render() {
    const { children, size, space, ...rest } = this.props;
    const { activeTabIndex } = this.state;
    const arrayChildren = Children.toArray(children);
    const activeTabContent = arrayChildren[activeTabIndex]
      ? arrayChildren[activeTabIndex].props.children
      : null;

    const tabs = arrayChildren
      .filter((child) => isComponent(child, TabRef))
      .map((child, index) =>
        cloneElement(child, {
          active: index === activeTabIndex,
          onClick: (...args) =>
            this.activateTab(index, child.props.onClick, ...args),
        })
      );

    return (
      <Base {...omit(rest, ["activeTabIndex"])}>
        <Tabs size={size}>{tabs}</Tabs>
        <Base space={space}>{activeTabContent}</Base>
      </Base>
    );
  }
}
