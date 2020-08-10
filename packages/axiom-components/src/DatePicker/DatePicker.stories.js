import React, { useState } from "react";
import { Duration, DateTime } from "luxon";
import { mediumDate } from "@brandwatch/axiom-formatting";
import DatePicker from "./DatePicker";
import DatePickerContext from "./DatePickerContext";
import DatePickerControls from "./DatePickerControls";
import DatePickerDay from "./DatePickerDay";
import DatePickerHeaderControl from "./DatePickerHeaderControl";
import DatePickerRangeSelection from "./DatePickerRangeSelection";
import DatePickerSelection from "./DatePickerSelection";
import DatePickerViewMonth from "./DatePickerViewMonth";
import Button from "../Button/Button";
import TextInput from "../Form/TextInput";
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
  const [appliedDate, setAppliedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  let formattedDate = null;

  if (appliedDate) {
    formattedDate = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(appliedDate);
  }

  return (
    <div style={{ width: "100px" }}>
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
        <TextInput
          label="Start date"
          value={formattedDate}
          placeholder="dd/mm/yy"
        />
      </DatePicker>
    </div>
  );
}

export function DoubleDatePicker() {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);

  const handleSelect = ({ dateEnd, dateStart }) => {
    setDateStart(dateStart);
    setDateEnd(dateEnd);
  };

  const getSelectedDateValue = () => {
    if (dateStart && dateEnd) {
      return `${mediumDate(dateStart)} ${
        dateEnd ? `- ${mediumDate(dateEnd)}` : ""
      }`;
    }

    return "";
  };

  return (
    <DatePicker
      onSelect={handleSelect}
      rangeSelect
      selectedStartDate={dateStart}
      selectedEndDate={dateEnd}
      view="double"
    >
      <TextInput
        placeholder="Select a date"
        readOnly
        value={getSelectedDateValue()}
      />
    </DatePicker>
  );
}

export function RangeSelect() {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [range, setRange] = useState(null);

  const handleSelect = ({ dateEnd, dateStart, range }) => {
    if (range) {
      const end = DateTime.local().endOf("day");
      dateEnd = end.toJSDate();
      dateStart = end
        .minus(Duration.fromISO(range))
        .plus(1, "microsecond")
        .toJSDate();
    }

    setDateStart(dateStart);
    setDateEnd(dateEnd);
    setRange(range);
  };

  const getSelectedDateValue = () => {
    if (dateStart && dateEnd) {
      return `${mediumDate(dateStart)} ${
        dateEnd ? `- ${mediumDate(dateEnd)}` : ""
      }`;
    }

    return "";
  };

  return (
    <DatePicker
      onSelect={handleSelect}
      rangeSelect
      rangeSelections={[
        { label: "Today", range: "P1D" },
        { label: "7D", range: "P7D" },
        { label: "14D", range: "P14D" },
        { label: "1M", range: "P1M" },
        { label: "2M", range: "P2M" },
      ]}
      selectedStartDate={dateStart}
      selectedEndDate={dateEnd}
      selectedRange={range}
      view="double"
    >
      <TextInput
        placeholder="Select a date"
        readOnly
        value={getSelectedDateValue()}
      />
    </DatePicker>
  );
}

RangeSelect.parameters = {
  docs: {
    description: {
      story:
        "You will need to pass range formats that match your date library and convert them back into start/end dates as we do here in handleSelect",
    },
  },
};
