import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Context from '../context/Context';
import ContextBox from '../context/ContextBox';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import DatePickerControls from './DatePickerControls';
import DatePickerHeaderControl from './DatePickerHeaderControl';
import DatePickerViewMonth from './DatePickerViewMonth';
import {
  addMonths,
  dateOrNow,
  isAfterDay,
  isBeforeDay,
  isSameMonth,
  orderDates,
} from './utils';
import './DatePicker.css';

export default class DatePickerContext extends Component {
  static propTypes = {
    earliestSelectableDate: PropTypes.instanceOf(Date),
    initialDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onApply: PropTypes.func,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    rangeSelect: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    selectedEndDate: PropTypes.instanceOf(Date),
    selectedStartDate: PropTypes.instanceOf(Date),
    view: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleDaySelect = this.handleDaySelect.bind(this);

    const { initialDate, rangeSelect, selectedDate } = this.props;
    const [ selectedStartDate, selectedEndDate ] = orderDates(
      this.props.selectedStartDate,
      this.props.selectedEndDate,
    );

    const activeStartDate = dateOrNow(
      (rangeSelect ? selectedStartDate : selectedDate) ||
      initialDate
    );

    const activeEndDate = rangeSelect && selectedEndDate
      ? (isSameMonth(selectedEndDate, selectedStartDate)
        ? addMonths(selectedEndDate, 1)
        : selectedEndDate)
      : addMonths(activeStartDate, 1);

    this.state = {
      activeStartDate,
      activeEndDate,
    };
  }

  handleActiveStartDateChange(direction) {
    this.setState((state) => ({
      activeStartDate: addMonths(state.activeStartDate, direction),
    }));
  }

  handleActiveEndDateChange(direction) {
    this.setState((state) => ({
      activeEndDate: addMonths(state.activeEndDate, direction),
    }));
  }

  handleDaySelect(date) {
    const {
      onSelect,
      rangeSelect,
      selectedStartDate,
      selectedEndDate,
    } = this.props;

    if (!rangeSelect) {
      return onSelect({ date: new Date(date) });
    }

    if (!selectedStartDate ||
        isBeforeDay(date, selectedStartDate)) {
      return onSelect({
        dateStart: new Date(date),
        dateEnd: selectedEndDate && new Date(selectedEndDate),
      });
    }

    if (!selectedEndDate ||
        isAfterDay(date, selectedEndDate)) {
      return onSelect({
        dateStart: new Date(selectedStartDate),
        dateEnd: new Date(date),
      });
    }

    return onSelect({
      dateStart: new Date(date),
      dateEnd: undefined,
    });
  }

  render() {
    const {
      activeEndDate,
      activeStartDate,
    } = this.state;

    const { rangeSelect, selectedDate, onApply, onCancel, view, ...rest } = this.props;

    const [ selectedStartDate, selectedEndDate ] = orderDates(
      this.props.selectedStartDate,
      this.props.selectedEndDate,
    );

    const [ earliestSelectableDate, latestSelectableDate ] = orderDates(
      this.props.earliestSelectableDate,
      this.props.latestSelectableDate,
    );

    const isDoubeView = view === 'double';
    const props = omit(rest, [
      'earliestSelectableDate',
      'initialDate',
      'latestSelectableDate',
      'onSelect',
      'selectedEndDate',
      'selectedStartDate',
    ]);

    return (
      <Context { ...props } maxHeight="auto" width="auto">
        <ContextBox hasFullSeparator>
          <Grid responsive={ false } shrink>
            <GridCell>
              <DatePickerHeaderControl
                  date={ activeStartDate }
                  earliestSelectableDate={ earliestSelectableDate }
                  latestSelectableDate={ isDoubeView
                    ? addMonths(activeEndDate, -1)
                    : latestSelectableDate }
                  onNext={ () => this.handleActiveStartDateChange(1) }
                  onPrevious={ () => this.handleActiveStartDateChange(-1) } />
              <DatePickerViewMonth
                  date={ activeStartDate }
                  earliestSelectableDate={ earliestSelectableDate }
                  latestSelectableDate={ latestSelectableDate }
                  onSelect={ this.handleDaySelect }
                  rangeSelect={ rangeSelect }
                  selectedDate={ !rangeSelect ? selectedDate : undefined }
                  selectedEndDate={ rangeSelect ? selectedEndDate : undefined }
                  selectedStartDate={ rangeSelect ? selectedStartDate : undefined } />
            </GridCell>

            { isDoubeView && (
              <GridCell hiddenUntil="small">
                <DatePickerHeaderControl
                    date={ activeEndDate }
                    earliestSelectableDate={ addMonths(activeStartDate, 1) }
                    latestSelectableDate={ latestSelectableDate }
                    onNext={ () => this.handleActiveEndDateChange(1) }
                    onPrevious={ () => this.handleActiveEndDateChange(-1) } />
                <DatePickerViewMonth
                    date={ activeEndDate }
                    earliestSelectableDate={ earliestSelectableDate }
                    latestSelectableDate={ latestSelectableDate }
                    onSelect={ this.handleDaySelect }
                    rangeSelect={ rangeSelect }
                    selectedDate={ !rangeSelect ? selectedDate : undefined }
                    selectedEndDate={ rangeSelect ? selectedEndDate : undefined }
                    selectedStartDate={ rangeSelect ? selectedStartDate : undefined } />
              </GridCell>
            ) }
          </Grid>
        </ContextBox>

        <ContextBox>
          <DatePickerControls
              onApply={ onApply }
              onCancel={ onCancel }
              rangeSelect={ rangeSelect }
              selectedDate={ selectedDate }
              selectedEndDate={ selectedEndDate }
              selectedStartDate={ selectedStartDate }
              view={ view } />
        </ContextBox>
      </Context>
    );
  }
}
