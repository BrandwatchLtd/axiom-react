import React, { PropTypes, Component } from 'react';

class Search extends Component {
  componentDidMount() {
    this.focusInput();
  }

  focusInput() {
    this.refs.search.focus();
  }

  onFilterItems(event) {
    this.props.onFilterItems(event.target.value);
  }

  render() {
    return (
      <div className="pickadilly__search">
        <input
            className="pickadilly__input"
            onChange={ this.onFilterItems.bind(this) }
            onKeyDown={ this.props.onKeyDown }
            ref="search"
            type="text" />
      </div>
    );
  }
}

Search.propTypes = {
  onFilterItems: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Search;
