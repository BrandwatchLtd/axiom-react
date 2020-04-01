import PropTypes from 'prop-types';
import React, { Component } from 'react';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Icon from '../Icon/Icon';
import PaginationButtonGroup from './PaginationButtonGroup';
import PaginationButton from './PaginationButton';
import {
  isLargerThanRange,
  isWithinStartRange,
  isWithinEndRange,
  getDisplayRange,
} from './utils';

export default class Pagination extends Component {
  static propTypes = {
    /** Active page number */
    currentPage: PropTypes.number.isRequired,
    /** The number of page buttons to visible at any time */
    displayRange: PropTypes.number,
    /** Page change handler that will be called with a page number */
    onPageChange: PropTypes.func.isRequired,
    /** The total number of pages that are available  */
    totalPages: PropTypes.number.isRequired,
  };

  static defaultProps = {
    displayRange: 5,
  };

  render() {
    const {
      currentPage,
      displayRange,
      onPageChange,
      totalPages,
      ...rest
    } = this.props;

    const showPrevious =
      isLargerThanRange(displayRange, totalPages) &&
      !isWithinStartRange(currentPage, displayRange);
    const showNext =
      isLargerThanRange(displayRange, totalPages) &&
      !isWithinEndRange(currentPage, displayRange, totalPages);

    return (
      <PaginationButtonGroup {...rest}>
        <PaginationButton
          data-ax-at={atIds.Pagination.previous}
          disabled={currentPage === 1}
          onClick={onPageChange}
          page={currentPage - 1}
          shape="circle"
        >
          <Icon name="chevron-left" />
        </PaginationButton>

        {showPrevious && [
          <PaginationButton
            data-ax-at={atIds.Pagination.first}
            key="page-first"
            onClick={onPageChange}
            page={1}
          >
            1
          </PaginationButton>,
          <PaginationButton disabled key="page-first-ellipsis" shape="circle">
            <Icon name="ellipsis" />
          </PaginationButton>,
        ]}

        {Boolean(displayRange) &&
          getDisplayRange(currentPage, displayRange, totalPages).map(n => (
            <PaginationButton
              active={currentPage === n}
              key={n}
              onClick={onPageChange}
              page={n}
            >
              {n}
            </PaginationButton>
          ))}

        {showNext && [
          <PaginationButton disabled key="page-last-ellipsis" shape="circle">
            <Icon name="ellipsis" />
          </PaginationButton>,
          <PaginationButton
            data-ax-at={atIds.Pagination.last}
            key="page-last"
            onClick={onPageChange}
            page={totalPages}
          >
            {totalPages}
          </PaginationButton>,
        ]}

        <PaginationButton
          data-ax-at={atIds.Pagination.next}
          disabled={currentPage === totalPages}
          onClick={onPageChange}
          page={currentPage + 1}
          shape="circle"
        >
          <Icon name="chevron-right" />
        </PaginationButton>
      </PaginationButtonGroup>
    );
  }
}
