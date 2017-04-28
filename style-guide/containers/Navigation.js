import React, { Component, PropTypes } from 'react';
import Nav from '../components/Navigation';
import { normalisePath, findChildRoutes } from '../utils/navigation';

function buildItem({ props }, activePath, openPath, parentPath = '') {
  const path = `${parentPath}/${props.path}`;

  return {
    name: props.name,
    to: path,
    isOpen: openPath.includes(path),
    isActive: path === activePath,
    children: Array.isArray(props.children)
      ? props.children.map((child) => buildItem(child, activePath, openPath, path))
      : null,
  };
}

export default class Navigation extends Component {
  static contextTypes = {
    pathname: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePath: undefined,
      openPath: undefined,
    };
  }

  componentWillMount() {
    const { pathname } = this.context;

    this.setState({
      activePath: normalisePath(pathname),
      openPath: normalisePath(pathname),
    });
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    const { pathname } = this.context;
    const { pathname: nextPathname } = nextContext;

    if (nextPathname !== pathname) {
      this.setState({
        activePath: normalisePath(nextPathname),
        openPath: normalisePath(nextPathname),
      });
    }
  }

  handleItemClick({ to, children }) {
    this.setState({ openPath: to });

    if (!children) {
      this.setState({ activePath: to });
    }
  }

  getNavigationItems() {
    const { activePath, openPath } = this.state;

    return findChildRoutes('/docs').map((child) =>
      buildItem(child, activePath, openPath, '/docs')
    );
  }

  render() {
    return (
      <Nav
          items={ this.getNavigationItems() }
          onItemClick={ this.handleItemClick.bind(this) } />
    );
  }
}
