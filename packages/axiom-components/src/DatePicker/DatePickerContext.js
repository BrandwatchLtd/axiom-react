import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import DatePickerControls from './DatePickerControls';
import DatePickerSelection from './DatePickerSelection';
import DatePickerRangeSelection from './DatePickerRangeSelection';
import SelectedDateOrRangePropTypes from './SelectedDateOrRangePropTypes';
import './DatePicker.css';

export default class DatePickerContext extends Component {
  static propTypes = {
    calendarOpenDate: PropTypes.instanceOf(Date),
    earliestSelectableDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onApply: PropTypes.func,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    rangeSelections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
      })
    ),
    selectedRange: PropTypes.string,
    view: PropTypes.string,
    ...SelectedDateOrRangePropTypes,
  };

  handleRangeSelection(range) {
    const { onSelect, rangeSelect } = this.props;

    rangeSelect && onSelect({ range });
  }

  render() {
    const {
      calendarOpenDate,
      earliestSelectableDate,
      latestSelectableDate,
      rangeSelect,
      rangeSelections,
      selectedDate,
      selectedEndDate,
      selectedRange,
      selectedStartDate,
      onSelect,
      onApply,
      onCancel,
      view,
      ...rest
    } = this.props;

    const showRangeSelection =
      rangeSelect && rangeSelections && rangeSelections.length;

    return (
      <DropdownContext {...rest}>
        <DropdownContent hasFullSeparator>
          <DatePickerSelection
            calendarOpenDate={calendarOpenDate}
            earliestSelectableDate={earliestSelectableDate}
            latestSelectableDate={latestSelectableDate}
            onSelect={onSelect}
            rangeSelect={rangeSelect}
            selectedDate={selectedDate}
            selectedEndDate={selectedEndDate}
            selectedStartDate={selectedStartDate}
            view={view}
          />
          {showRangeSelection && (
            <DatePickerRangeSelection
              onRangeSelection={range => this.handleRangeSelection(range)}
              rangeSelections={rangeSelections}
              selectedRange={selectedRange}
              view={view}
            />
          )}
          <DatePickerControls
            onApply={onApply}
            onCancel={onCancel}
            rangeSelect={rangeSelect}
            selectedDate={selectedDate}
            selectedEndDate={selectedEndDate}
            selectedStartDate={selectedStartDate}
            view={view}
          />
        </DropdownContent>
      </DropdownContext>
    );
  }
}
