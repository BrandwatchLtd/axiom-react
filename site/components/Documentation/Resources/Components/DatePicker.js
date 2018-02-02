import React, { Component } from 'react';
import { Button, ButtonIcon, DatePicker, Grid, GridCell, TextInput, TextInputIcon } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { mediumDate } from '@brandwatch/axiom-formatting';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      dateEnd: '',
      dateStart: '',
    };
  }

  render() {
    const { date, dateEnd, dateStart } = this.state;
    const value = dateStart
    ? `${mediumDate(dateStart)} ${dateEnd ? `- ${mediumDate(dateEnd)}` : ''}`
    : (date && mediumDate(date));

    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <DatePicker onSelect={ (setValue, getValue, { date, dateStart, dateEnd }) => {
                setValue('DatePicker', 'selectedDate', date);
                setValue('DatePicker', 'selectedEndDate', dateEnd);
                setValue('DatePicker', 'selectedStartDate', dateStart);
                this.setState({ date, dateEnd, dateStart });
              } }>
                <Button>
                  Show Date Picker <ButtonIcon name="chevron-down" />
                </Button>
              </DatePicker>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <DatePicker onSelect={ (setValue, getValue, { date, dateStart, dateEnd }) => {
                setValue('DatePicker', 'selectedDate', date);
                setValue('DatePicker', 'selectedEndDate', dateEnd);
                setValue('DatePicker', 'selectedStartDate', dateStart);
                this.setState({ date, dateEnd, dateStart });
              } }>
                <TextInput
                    placeholder="Select a date"
                    readOnly
                    value={ value }>
                  <TextInputIcon align="right" name="chevron-down" />
                </TextInput>
              </DatePicker>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/DatePicker/DatePicker'),
        ] } />
      </DocumentationContent>
    );
  }
}
