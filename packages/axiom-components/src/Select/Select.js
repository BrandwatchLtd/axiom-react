import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import omit from 'lodash.omit';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import SelectInput from './SelectInput';

export default class Select extends Component {
  static propTypes = {
    /**
     * Children inside Select should contain all of and
     * only SelectOption and SelectOptionGroup!
     */
    children: PropTypes.node,
    /** Event that is fired when the input field is cleared */
    onClear: PropTypes.func,
    /** Invoked when the SelectMenu is closed. */
    onRequestClose: PropTypes.func,
    /** Invoked when the SelectMenu is opened. */
    onRequestOpen: PropTypes.func,
    /** Event that is fired when an option is selected */
    onSelect: PropTypes.func,
    /** The value of the selected option  */
    selectedValue: PropTypes.any,
    /** Value of the input field */
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: '',
    onSelect: () => {},
  };

  static childContextTypes = {
    handleSelectOption: PropTypes.func.isRequired,
    selectedOptionValue: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  getChildContext() {
    return {
      handleSelectOption: this.handleSelectOption,
      selectedOptionValue: this.props.selectedValue,
    };
  }

  handleSelectOption(value) {
    this.props.onSelect(value);
  }

  render() {
    const { children, onRequestClose, onRequestOpen, ...props } = this.props;

    return (
      <Dropdown
        enabled={Children.count(children) > 0}
        flip="mirror"
        onRequestClose={onRequestClose}
        onRequestOpen={onRequestOpen}
        position="bottom"
      >
        <DropdownTarget>
          <SelectInput {...omit(props, ['onSelect', 'selectedValue'])} />
        </DropdownTarget>

        <DropdownSource focusOnOpen>
          <DropdownContext>{children}</DropdownContext>
        </DropdownSource>
      </Dropdown>
    );
  }
}
