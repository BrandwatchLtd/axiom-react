import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'bw-axiom';
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
    currentPage: PropTypes.number.isRequired,
    displayRange: PropTypes.number,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
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

    const showPrevious = isLargerThanRange(displayRange, totalPages) &&
      !isWithinStartRange(currentPage, displayRange);
    const showNext = isLargerThanRange(displayRange, totalPages) &&
      !isWithinEndRange(currentPage, displayRange, totalPages);

    return (
      <PaginationButtonGroup { ...rest }>
        <PaginationButton
            circular="small"
            disabled={ currentPage === 1 }
            onClick={ onPageChange }
            page={ currentPage - 1 }>
          <Icon name="chevron-left" />
        </PaginationButton>

        { do { if (showPrevious) [
          <PaginationButton
              key="page-first"
              onClick={ onPageChange }
              page={ 1 }>
            1
          </PaginationButton>,
          <PaginationButton
              circular="small"
              disabled={ true }
              key="page-first-ellipsis">
            <Icon name="ellipsis" />
          </PaginationButton>,
        ]; } }

        { do { if (displayRange) {
          getDisplayRange(currentPage, displayRange, totalPages).map((n) =>
            <PaginationButton
                active={ currentPage === n }
                key={ n }
                onClick={ onPageChange }
                page={ n }>
              { n }
            </PaginationButton>
          );
        } } }

        { do { if (showNext) [
          <PaginationButton
              circular="small"
              disabled={ true }
              key="page-last-ellipsis">
            <Icon name="ellipsis" />
          </PaginationButton>,
          <PaginationButton
              key="page-last"
              onClick={ onPageChange }
              page={ totalPages }>
            { totalPages }
          </PaginationButton>,
        ]; } }

        <PaginationButton
            circular="small"
            disabled={ currentPage === totalPages }
            onClick={ onPageChange }
            page={ currentPage + 1 }>
          <Icon name="chevron-right" />
        </PaginationButton>
      </PaginationButtonGroup>
    );
  }
}
