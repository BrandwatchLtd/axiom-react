import debounce from 'lodash/debounce';
import React, { PropTypes, Component } from 'react';
import { Icon, TextInput } from 'bw-axiom/react';

export default class SearchInput extends Component {
  static propTypes = {
    locationState: PropTypes.shape({
      query: PropTypes.object.isRequired,
    }).isRequired,
    searchActions: PropTypes.shape({
      searchRoutes: PropTypes.func.isRequired,
    }).isRequired,
    searchState: PropTypes.shape({
      isSearching: PropTypes.bool.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.updateSearchTextDebounced = debounce(::this.updateSearchText, 300);
  }

  onChangeHandler(event) {
    event.persist();
    this.updateSearchTextDebounced(event);
  }

  updateSearchText(event) {
    const { target: { value } } = event;
    const { searchActions: { searchRoutes } } = this.props;

    if (value) {
      searchRoutes(value);
    }
  }

  render() {
    const {
      locationState: { query: { q } },
      searchState: { isSearching },
    } = this.props;

    return (
      <TextInput
          defaultValue={ q }
          onChange={ ::this.onChangeHandler }
          placeholder="Looking for something?"
          thinking={ isSearching }>
        <Icon name="search" />
      </TextInput>
    );
  }
}
