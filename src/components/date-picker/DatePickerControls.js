import PropTypes from 'prop-types';
import React, { Component } from 'react';
import mediumDate from '../../materials/date-and-time/mediumDate';
import Button from '../button/Button';
import ButtonGroup from '../button/ButtonGroup';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';

export default class DatePickerControls extends Component  {
  static propTypes = {
    rangeSelect: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    selectedEndDate: PropTypes.instanceOf(Date),
    selectedStartDate: PropTypes.instanceOf(Date),
    view: PropTypes.string.isRequired,
    onApply: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
  };

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
      <Grid responsive={ false } space="x1">
        { view === 'double' && (
          <GridCell>
            { rangeSelect && selectedStartDate && mediumDate(selectedStartDate) }
            { rangeSelect && selectedEndDate && ` – ${mediumDate(selectedEndDate)}`}
            { !rangeSelect && selectedDate && mediumDate(selectedDate) }
          </GridCell>
        ) }

        <GridCell shrink>
          <ButtonGroup>
            <Button
                onClick={ this.handleApply }
                size="small"
                style="primary">Apply</Button>
            <Button
                onClick={ this.handleCancel }
                size="small"
                style="secondary">Cancel</Button>
          </ButtonGroup>
        </GridCell>
      </Grid>
    );
  }
}
