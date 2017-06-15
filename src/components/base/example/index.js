import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Pagination } from 'bw-axiom';

class PagiantionExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Pagination: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Pagination: components.Pagination,
    };

    const initialProps = {
      Pagination: {
        currentPage: 2,
        displayRange: 5,
        onPageChange: () => {},
        totalPages: 100,
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Pagination { ...initialProps.Pagination } />
      </ExampleConfig>
    );
  }
}

module.exports = [
  PagiantionExample,
];
