import PropTypes from "prop-types";
import React, { useContext } from "react";
import { mediumDate } from "@brandwatch/axiom-formatting";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import DropdownReactContext from "../Dropdown/DropdownReactContext";

export default function DatePickerControls({
  onCancel,
  onApply,
  rangeSelect,
  selectedDate,
  selectedEndDate,
  selectedStartDate,
  view,
}) {
  const { closeDropdown } = useContext(DropdownReactContext);

  function handleApply() {
    onApply && onApply();
    closeDropdown();
  }

  function handleCancel() {
    onCancel && onCancel();
    closeDropdown();
  }

  return (
    <Grid horizontalAlign="end" responsive={false}>
      {view === "double" && (
        <GridCell hiddenUntil="small">
          {rangeSelect && selectedStartDate && mediumDate(selectedStartDate)}
          {rangeSelect &&
            selectedEndDate &&
            ` – ${mediumDate(selectedEndDate)}`}
          {!rangeSelect && selectedDate && mediumDate(selectedDate)}
        </GridCell>
      )}

      <GridCell shrink>
        <ButtonGroup>
          <Button onClick={handleApply} size="small" variant="primary">
            Apply
          </Button>
          <Button onClick={handleCancel} size="small" variant="secondary">
            Cancel
          </Button>
        </ButtonGroup>
      </GridCell>
    </Grid>
  );
}

DatePickerControls.propTypes = {
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  rangeSelect: PropTypes.bool,
  selectedDate: PropTypes.instanceOf(Date),
  selectedEndDate: PropTypes.instanceOf(Date),
  selectedStartDate: PropTypes.instanceOf(Date),
  view: PropTypes.string.isRequired,
};
