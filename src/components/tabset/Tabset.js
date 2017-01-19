import React, { Component, Children, PropTypes, cloneElement } from 'react';
import omit from 'lodash.omit';
import { Base, Tab } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Tabset.scss');
}

export default class Tabset extends Component {
  static propTypes = {
    activeTabIndex: PropTypes.number,
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    size: 'small',
  };

  componentWillMount() {
    this.activateTab(this.props.activeTabIndex);
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
      .filter(({ type }) => type === Tab)
      .map((child, index) => cloneElement(child, {
        active: index === activeTabIndex,
        onClick: () => this.activateTab(index),
        size,
      }));

    return (
      <Base { ...omit(rest, ['activeTabIndex']) } className="ax-tabset">
        <ul className="ax-tabset__list">
          { tabs }
        </ul>

        <div className="ax-tabset__content">
          { activeTabContent }
        </div>
      </Base>
    );
  }
}
