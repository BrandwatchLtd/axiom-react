import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Layout.css';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
    toggleSidebar: PropTypes.func,
  };

  getChildContext() {
    return {
      showSidebar: ::this.showSidebar,
      hideSidebar: ::this.hideSidebar,
      toggleSidebar: ::this.toggleSidebar,
    };
  }

  componentWillMount() {
    this.hideSidebar();
  }

  showSidebar() {
    this.setState({ open: true });
  }

  hideSidebar() {
    this.setState({ open: false });
  }

  toggleSidebar() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { className, children } = this.props;
    const { open } = this.state;
    const classes = classnames(className,
      'dm-layout', {
        'dm-layout--open': open,
      }
    );

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
