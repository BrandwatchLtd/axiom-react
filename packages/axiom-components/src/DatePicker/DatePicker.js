import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import DatePickerContext from './DatePickerContext';

export default class DatePicker extends Component {
  static propTypes = {
    /**
     * The date that should be shown to the user when the picker opens.
     * When a selected date or range is given, that supersedes this
     * property. Defaults to 'today'.
     */
    calendarOpenDate: PropTypes.instanceOf(Date),
    /** The element to position the DatePicker around */
    children: PropTypes.node.isRequired,
    /** A lower limit to the earliest date that can be selected */
    earliestSelectableDate: PropTypes.instanceOf(Date),
    /** An upper limit to the latest date that can be selected */
    latestSelectableDate: PropTypes.instanceOf(Date),
    /** Callback for when the apply button has been clicked */
    onApply: PropTypes.func,
    /** Callback for when the cancel button has been clicked */
    onCancel: PropTypes.func,
    /** Callback for when a date, range with endDate and startDate, or a range
     * out of rangeSelections has been selected */
    onSelect: PropTypes.func.isRequired,
    /** Whether a date range can be selected */
    rangeSelect: PropTypes.bool,
    /** Predefined date ranges offered for selection. label will be shown and
     * range is passed to onSelect when clicked. */
    rangeSelections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
      })
    ),
    /** A single date that appears selected */
    selectedDate: PropTypes.instanceOf(Date),
    /** The date selected at the end of the range */
    selectedEndDate: PropTypes.instanceOf(Date),
    /** The selected range, specified as it's label */
    selectedRange: PropTypes.string,
    /** The date selected at the start of the range */
    selectedStartDate: PropTypes.instanceOf(Date),
    /** Configuration for a single date picker view or two pickers side by side */
    view: PropTypes.oneOf(['single', 'double']),
  };

  static defaultProps = {
    view: 'single',
    rangeSelect: false,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Dropdown showArrow>
        <DropdownTarget>{children}</DropdownTarget>

        <DropdownSource maxHeight="auto" width="auto">
          <DatePickerContext {...rest} />
        </DropdownSource>
      </Dropdown>
    );
  }
}
