import PropTypes from 'prop-types';
import React, { Component } from 'react';
import flatten from 'lodash/flatten';
import { ExampleConfig } from 'style-guide';
import Form from '../../form/Form';
import Select from '../Select';
import SelectOption from '../SelectOption';
import SelectOptionGroup from '../SelectOptionGroup';

class SelectExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Select: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: [[
        { label: 'Apple', value: 'ap' },
        { label: 'Banana', value: 'ba' },
        { label: 'Grape', value: 'gr' },
        { label: 'Grapefruit', value: 'gra' },
        { label: 'Mango', value: 'ma' },
        { label: 'Pear', value: 'pe' },
        { label: 'Peach', value: 'pa' },
        { label: 'Pineapple', value: 'pi', disabled: true },
        { label: 'Plum', value: 'pl' },
      ], [
        { label: 'Broccoli', value: 'br' },
        { label: 'Cabbage', value: 'ca' },
        { label: 'Carrot', value: 'car' },
        { label: 'Cauliflower', value: 'cau' },
        { label: 'Pea', value: 'pea' },
        { label: 'Runner Bean', value: 'ru' },
      ]],
      selectedValue: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleClear() {
    this.setState({
      value: '',
      selectedValue: null,
    });
  }

  handleChange({ target }) {
    this.setState(({ options }) => {
      const selectedOption = flatten(options).filter(
        o => o.label.toLowerCase() === target.value.toLowerCase())[0];
      return {
        value: target.value,
        selectedValue: (selectedOption) ? selectedOption.value : null,
      };
    });
  }

  handleSelect(selectedValue) {
    this.setState(({ options }) => {
      const selectedOption = flatten(options).filter(o => o.value === selectedValue)[0];
      return {
        value: (selectedOption) ? selectedOption.label : '',
        selectedValue,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { components } = this.props;
    const { options, selectedValue, value } = this.state;

    const propTypes = {
      Select: components.Select,
      SelectOption: components.SelectOption,
      SelectOptionGroup: components.SelectOptionGroup,
    };

    const initialProps = {
      Select: {
        onChange: this.handleChange,
        onClear: value.length ? this.handleClear : undefined,
        onSelect: this.handleSelect,
        selectedValue,
        value,
      },
      SelectOption: {},
      SelectOptionGroup: {},
    };

    const optionFilter = ({ label }) => label.toLowerCase().indexOf(value.toLowerCase()) === 0;

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>

        <Form onSubmit={ this.handleSubmit }>
          <Select { ...initialProps.Select } label={ `Selected value: ${ selectedValue || '' }` }>
            { options
                .filter(group => group.filter(optionFilter).length > 0 )
                .map((group, index) => (
                  <SelectOptionGroup key={ index } { ...initialProps.SelectOptionGroup }>
                    { group
                      .filter(optionFilter)
                      .map(({ label, ...props }) => (
                        <SelectOption
                            { ...initialProps.SelectOption }
                            key={ props.value }
                            { ...props }>
                          { label }
                        </SelectOption>
                      ))
                    }
                  </SelectOptionGroup>
            ) ) }
          </Select>
        </Form>
      </ExampleConfig>
    );
  }
}

export default [ SelectExample ];
