import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getDayNumber } from './utils';

export default class DatePickerDay extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    selectedEnd: PropTypes.bool.isRequired,
    selectedStart: PropTypes.bool.isRequired,
    selection: PropTypes.bool.isRequired,
    weekEnd: PropTypes.bool.isRequired,
    weekStart: PropTypes.bool.isRequired,
  };

  render() {
    const {
      date,
      disabled,
      onSelect,
      selected,
      selectedEnd,
      selectedStart,
      selection,
      weekEnd,
      weekStart,
    } = this.props;

    const classes = classnames('ax-date-picker__day', {
      'ax-date-picker__day--first': weekStart,
      'ax-date-picker__day--last': weekEnd,
      'ax-date-picker__day--selected': selected,
      'ax-date-picker__day--selected-end': selectedEnd,
      'ax-date-picker__day--selected-start': selectedStart,
      'ax-date-picker__day--selection': selection,
    });

    return (
      <button
          className={ classes }
          disabled={ !date || disabled }
          onClick={ () => date && onSelect(date) }>
        <div className="ax-date-picker__day-inner">
          { date && getDayNumber(date) }
        </div>
      </button>
    );
  }
}
