import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getNavigationItems, normalisePath } from '../../utils/documentation-routes';
import NavigationList from './NavigationList';
import './Navigation.css';

export default class Navigation extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePath: undefined,
      openPath: undefined,
    };
  }

  componentWillMount() {
    const { location } = this.props;

    this.setState({
      activePath: normalisePath(location.pathname),
      openPath: normalisePath(location.pathname),
    });
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const { location: nextLocation } = nextProps;

    if (nextLocation.pathname !== location.pathname) {
      this.setState({
        activePath: normalisePath(nextLocation.pathname),
        openPath: normalisePath(nextLocation.pathname),
      });
    }
  }

  handleItemClick({ to, children }) {
    this.setState({ openPath: to });

    if (!children) {
      this.setState({ activePath: to });
    }
  }

  render() {
    const { activePath, openPath } = this.state;

    return (
      <nav className="dm-navigation">
        <NavigationList
            items={ getNavigationItems(activePath, openPath) }
            onItemClick={ this.handleItemClick.bind(this) } />
      </nav>
    );
  }
}
