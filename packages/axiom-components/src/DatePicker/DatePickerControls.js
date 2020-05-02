import PropTypes from "prop-types";
import React, { Component } from "react";
import { mediumDate } from "@brandwatch/axiom-formatting";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import DropdownReactContext from "../Dropdown/DropdownReactContext";

export default class DatePickerControls extends Component {
  static propTypes = {
    onApply: PropTypes.func,
    onCancel: PropTypes.func,
    rangeSelect: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    selectedEndDate: PropTypes.instanceOf(Date),
    selectedStartDate: PropTypes.instanceOf(Date),
    view: PropTypes.string.isRequired,
  };

  static contextType = DropdownReactContext;

  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleApply() {
    this.props.onApply && this.props.onApply();
    this.context.closeDropdown();
  }

  handleCancel() {
    this.props.onCancel && this.props.onCancel();
    this.context.closeDropdown();
  }

  render() {
    const {
      rangeSelect,
      selectedDate,
      selectedEndDate,
      selectedStartDate,
      view,
    } = this.props;

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
            <Button onClick={this.handleApply} size="small" variant="primary">
              Apply
            </Button>
            <Button
              onClick={this.handleCancel}
              size="small"
              variant="secondary"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </GridCell>
      </Grid>
    );
  }
}
