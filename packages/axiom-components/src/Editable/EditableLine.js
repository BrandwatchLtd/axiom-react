import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import "./EditableLine.css";

export default class EditableLine extends Component {
  static propTypes = {
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /** Handler for when the input field is changed */
    onChange: PropTypes.func.isRequired,
    /** Handler for when a key is pressed int the input field */
    onKeyDown: PropTypes.func,
    /** Placeholder content to be displayed when there is no value */
    placeholder: PropTypes.string,
    /** Value to be edited */
    value: PropTypes.string.isRequired,
  };

  handleOnKeyDown(event) {
    switch (event.key) {
      case "Enter":
      case "Escape":
        event.preventDefault();
        this.input.blur();
        break;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { className, placeholder, value, ...rest } = this.props;

    return (
      <div className={classnames("ax-editable-line", className)}>
        <input
          {...rest}
          className="ax-editable-line__input"
          onKeyDown={(event) => this.handleOnKeyDown(event)}
          placeholder={placeholder}
          ref={(el) => (this.input = el)}
        />

        <div className="ax-editable-line__structure">
          {value || placeholder || " "}
        </div>
      </div>
    );
  }
}
