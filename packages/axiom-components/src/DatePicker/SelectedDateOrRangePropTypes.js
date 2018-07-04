import PropTypes from 'prop-types';

function isRangeSelect(props) {
  return !!props.rangeSelect;
}

function isEmptyOrDate(props, propName) {
  const value = props[propName];

  if (!value) {
    return;
  }

  if (value instanceof Date && !isNaN(value)) {
    return;
  }

  return new Error(`Invalid prop ${propName}. Must be a valid Date.`);
}

export default {
  rangeSelect: PropTypes.bool,
  selectedDate: (props, propName) => {
    if (isRangeSelect(props)) {
      return;
    }

    return isEmptyOrDate(props, propName);
  },
  selectedEndDate: (props, propName) => {
    if (!isRangeSelect(props)) {
      return;
    }

    return isEmptyOrDate(props, propName);
  },
  selectedStartDate: (props, propName) => {
    if (!isRangeSelect(props)) {
      return;
    }

    return isEmptyOrDate(props, propName);
  },
};
