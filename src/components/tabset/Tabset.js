import React, { Component, Children, PropTypes, cloneElement } from 'react';
import omit from 'lodash/omit';
import Base from '../base/Base';
import Menu from '../menu/Menu';
import Tab from './Tab';

if (__INCLUDE_CSS__) {
  require('./Tabset.scss');
}

export default class Tabset extends Component {
  static propTypes = {
    activeTabIndex: PropTypes.number,
    children: PropTypes.node,
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
    const { children, ...rest } = this.props;
    const { activeTabIndex } = this.state;
    const activeTabContent = Children.toArray(children)[activeTabIndex].props.children;
    const tabs = Children.toArray(children)
      .filter(({ type }) => type === Tab)
      .map((child, index) => cloneElement(child, {
        isActive: index === activeTabIndex,
        onClick: () => this.activateTab(index),
      }));

    return (
      <Base { ...omit(rest, ['activeTabIndex']) } className="ax-tabset">
        <div className="ax-tabset__menu">
          <Menu>
            { tabs }
          </Menu>
        </div>

        <div className="ax-tabset__content">
          { activeTabContent }
        </div>
      </Base>
    );
  }
}
