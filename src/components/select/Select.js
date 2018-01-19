import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import omit from 'lodash.omit';
import Context from '../context/Context';
import Dropdown from '../dropdown/Dropdown';
import DropdownContent from '../dropdown/DropdownContent';
import DropdownTarget from '../dropdown/DropdownTarget';
import SelectInput from '../select/SelectInput';

export default class Select extends Component {
  static propTypes = {
    /**
     * Children inside Select should contain all of and
     * only SelectOption and SelectOptionGroup!
     */
    children: PropTypes.node,
    /** Event that is fired when the input field is cleared */
    onClear: PropTypes.func,
    /** Event that is fired when an option is selected */
    onSelect: PropTypes.func,
    /** The value of the selected option  */
    selectedValue: PropTypes.any,
    /** Value of the input field */
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: '',
    onClear: () => {},
    onSelect: () => {},
  };

  static childContextTypes = {
    handleSelectOption: PropTypes.func.isRequired,
    selectedOptionValue: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  getChildContext() {
    return {
      handleSelectOption: this.handleSelectOption,
      selectedOptionValue: this.props.selectedValue,
    };
  }

  handleClear() {
    this.props.onClear();
  }

  handleSelectOption(value) {
    this.props.onSelect(value);
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <Dropdown
          enabled={ Children.count(children) > 0 }
          flip="mirror"
          position="bottom"
          showArrow={ false }>
        <DropdownTarget>
          <SelectInput
              { ...omit(props, ['onSelect', 'selectedValue']) } />
        </DropdownTarget>
        <DropdownContent focusFirstItem>
          <Context>
            { Children.map(children, (child, index) =>
              cloneElement(child, { index: index.toString() })) }
          </Context>
        </DropdownContent>
      </Dropdown>
    );
  }
}
