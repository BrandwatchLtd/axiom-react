import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button/Button';
import ButtonIcon from '../Button/ButtonIcon';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Paragraph from '../Typography/Paragraph';
import {
  getMonthName,
  getYearNumber,
  isSameOrAfterMonth,
  isSameOrBeforeMonth,
} from './utils';

export default class DatePickerHeaderControl extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    earliestSelectableDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
  };

  render() {
    const {
      date,
      earliestSelectableDate,
      latestSelectableDate,
      onNext,
      onPrevious,
    } = this.props;

    return (
      <Grid
        gutters="small"
        horizontalAlign="between"
        responsive={false}
        shrink
        space="x4"
        verticalAlign="middle"
      >
        <GridCell>
          <Button
            disabled={isSameOrBeforeMonth(date, earliestSelectableDate)}
            onClick={() => onPrevious()}
            style="quaternary"
          >
            <ButtonIcon name="chevron-left" />
          </Button>
        </GridCell>

        <GridCell>
          <Paragraph>
            {getMonthName(date)} {getYearNumber(date)}
          </Paragraph>
        </GridCell>

        <GridCell>
          <Button
            disabled={isSameOrAfterMonth(date, latestSelectableDate)}
            onClick={() => onNext()}
            style="quaternary"
          >
            <ButtonIcon name="chevron-right" />
          </Button>
        </GridCell>
      </Grid>
    );
  }
}
