import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import { Panel } from 'bw-axiom';

export default class DataPicker extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    colorOptions: PropTypes.arrayOf(PropTypes.string),
    disabledColors: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onClear: PropTypes.func,
    onColorPickerOpen: PropTypes.func,
    onSelectColor: PropTypes.func,
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

