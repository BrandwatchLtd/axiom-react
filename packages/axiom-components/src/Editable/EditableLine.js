import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './EditableLine.css';

export default class EditableLine extends Component {
  static propTypes = {
    /** SKIP */
    onBlur: PropTypes.func,
    /** Callback with the value when the text has finished being edited */
    onChange: PropTypes.func.isRequired,
    /** SKIP */
    onKeyDown: PropTypes.func,
    /** Placeholder content to be displayed when there is no value */
    placeholder: PropTypes.string,
    /** Value to be edited */
    value: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleOnBlur(event) {
    if (this.state.value !== this.props.value) {
      this.props.onChange(this.state.value);
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleOnKeyDown(event) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.input.blur();
        break;
      case 'Escape':
        this.setState({ value: this.props.value }, () => this.input.blur());
        break;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { value } = this.state;
    const { placeholder, ...rest } = this.props;

    return (
      <div className="ax-editable-line">
        <input
          {...rest}
          className="ax-editable-line__input"
          onBlur={event => this.handleOnBlur(event)}
          onChange={event => this.handleChange(event)}
          onKeyDown={event => this.handleOnKeyDown(event)}
          placeholder={placeholder}
          ref={el => (this.input = el)}
          value={value}
        />

        <div className="ax-editable-line__structure">
          {value || placeholder || ' '}
        </div>
      </div>
    );
  }
}
