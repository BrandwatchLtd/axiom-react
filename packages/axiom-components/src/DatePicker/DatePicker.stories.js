import React, { useState } from "react";
import DatePicker from "./DatePicker";
import DatePickerContext from "./DatePickerContext";
import DatePickerControls from "./DatePickerControls";
import DatePickerDay from "./DatePickerDay";
import DatePickerHeaderControl from "./DatePickerHeaderControl";
import DatePickerRangeSelection from "./DatePickerRangeSelection";
import DatePickerSelection from "./DatePickerSelection";
import DatePickerViewMonth from "./DatePickerViewMonth";
import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon";

export default {
  title: "DatePicker",
  component: DatePicker,
  subcomponents: {
    DatePickerContext,
    DatePickerControls,
    DatePickerDay,
    DatePickerHeaderControl,
    DatePickerRangeSelection,
    DatePickerSelection,
    DatePickerViewMonth,
  },
};

export function SingleDate() {
  const [appliedDate, setAppliedDate] = useState();
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div>
      <DatePicker
        onSelect={({ date }) => {
          setSelectedDate(date);
        }}
        onApply={() => {
          setAppliedDate(selectedDate);
        }}
        onCancel={() => {
          setSelectedDate(appliedDate);
        }}
        selectedDate={selectedDate}
      >
        <Button>
          Show Date Picker <ButtonIcon name="chevron-down" />
        </Button>
      </DatePicker>
      <div>
        <pre>Date: {appliedDate?.toString()}</pre>
      </div>
    </div>
  );
}

export function RangeSelect() {
  const [dateEnd, setdateEnd] = useState();
  const [dateStart, setdateStart] = useState();
  const [range, setrange] = useState();

  const rangeSelections = [
    {
      label: "Today",
      range: "P1D",
    },
    {
      label: "7D",
      range: "P7D",
    },
    {
      label: "14D",
      range: "P14D",
    },
    {
      label: "1M",
      range: "P1M",
    },
    {
      label: "2M",
      range: "P2M",
    },
  ];

  return (
    <div>
      <DatePicker
        onSelect={({ dateStart, dateEnd, range }) => {
          setdateEnd(dateEnd);
          setdateStart(dateStart);
          setrange(range);
        }}
        rangeSelect
        rangeSelections={rangeSelections}
        selectedEndDate={dateEnd}
        selectedRange={range}
        selectedStartDate={dateStart}
      >
        <Button>
          Show Date Picker <ButtonIcon name="chevron-down" />
        </Button>
      </DatePicker>
      <div>
        <pre>dateStart: {dateStart?.toString()}</pre>
        <pre>dateEnd: {dateEnd?.toString()}</pre>
        <pre>range: {range?.toString()}</pre>
      </div>
    </div>
  );
}
