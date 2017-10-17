import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Panel from '../panel/Panel';

export default class DataPicker extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Selected color that will be displayed in the header */
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]),
    /** List of pickable colors to override the default, which is all colors. */
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    /** List of disabled colors that become unpickable */
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    /** Handler that is called when the "clear" link is clicked */
    onClear: PropTypes.func,
    /** Handler that is called when the color picker is opened */
    onColorPickerOpen: PropTypes.func,
    /** Handler that is called when a color is selected */
    onSelectColor: PropTypes.func,
    /** Placeholder text that will be displayed when no value is provided */
    placeholder: PropTypes.string.isRequired,
    /** Value that will be displayed in the header. */
    value: PropTypes.string,
  };

  static childContextTypes = {
    color: PropTypes.string,
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.string.isRequired,
    onClear: PropTypes.func,
    onColorPickerOpen: PropTypes.func,
    onSelectColor: PropTypes.func,
    value: PropTypes.string,
  };

  getChildContext() {
    const {
      color,
      colorOptions,
      disabledColors,
      placeholder,
      value,
      onClear,
      onColorPickerOpen,
      onSelectColor,
    } = this.props;

    return {
      color,
      colorOptions,
      disabledColors,
      placeholder,
      value,
      onClear,
      onColorPickerOpen,
      onSelectColor,
    };
  }

  render() {
    const { children, value, ...rest } = this.props;
    const props = omit(rest, [
      'color',
      'colorOptions',
      'disabledColors',
      'placeholder',
      'value',
      'onClear',
      'onColorPickerOpen',
      'onSelectColor',
    ]);

    return (
      <Panel { ...props } isInactive={ !value }>
        { children }
      </Panel>
    );
  }
}

