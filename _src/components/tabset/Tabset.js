import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import Link from '../typography/Link';

if (__INCLUDE_CSS__) {
  require('./Tabset.scss');
}

export class Tabset extends Component {
  static propTypes = {
    activeTabIndex: { number: true },
    children: { node: true },
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
    const { className, children, ...rest } = this.props;
    const { activeTabIndex } = this.state;
    const isActive = (index) => index === activeTabIndex;
    const tabs = (Array.isArray(children) ? children : [children]).filter((tab) => tab !== undefined);
    const tabTitles = tabs.map(({ props: { title } }) => title);
    const activeTab = tabs.find((tab, index) => isActive(index));
    const classes = classnames(className, 'ax-tabs');

    return (
      <div { ...rest } className={ classes }>
        <ul className="ax-tabs__nav">
          { tabTitles.map((title, index) => {
            const tabClassName = classnames('ax-tabs__nav-item', {
              'ax-tabs__nav-item--active': isActive(index),
            });

            return (
              <li className={ tabClassName } key={ index } onClick={ () => this.activateTab(index) } title={ title }>
                <Link className="ax-tabs__nav-link" supressStyle={ true }>
                  { title }
                </Link>
              </li>
            );
          }) }
        </ul>

        { activeTab }
      </div>
    );
  }
}

export default enhance(Tabset)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);

