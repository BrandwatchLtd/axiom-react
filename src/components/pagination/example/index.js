import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Pagination from '../Pagination';

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

    const initialPropOptions = {
      Pagination: {
        onPageChange: {
          callback: (setProp, _, n) => setProp('Pagination', 'currentPage', n),
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Pagination { ...initialProps.Pagination } />
      </ExampleConfig>
    );
  }
}

export default [ PagiantionExample ];
