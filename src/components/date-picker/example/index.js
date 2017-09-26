import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import ButtonIcon from '../../button/ButtonIcon';
import DatePicker from '../DatePicker';

class DatePickerExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DatePicker: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      DatePicker: components.DatePicker,
    };

    const initialProps = {
      DatePicker: {
        onSelect: () => {},
      },
    };

    const initialPropOptions = {
      DatePicker: {
        onSelect: {
          callback: (setProp, _, { date, dateStart, dateEnd }) => {
            setProp([
              ['DatePicker', 'selectedDate', date],
              ['DatePicker', 'selectedEndDate', dateEnd],
              ['DatePicker', 'selectedStartDate', dateStart],
            ]);
          },
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ButtonGroup
            placeholder="DatePicker"
            readOnly={ true }>
          <DatePicker { ...initialProps.DatePicker }>
            <Button>
              Show Date Picker <ButtonIcon name="chevron-down" />
            </Button>
          </DatePicker>
        </ButtonGroup>
      </ExampleConfig>
    );
  }
}

module.exports = [ DatePickerExample ];
