import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { preventDefault } from './helpers';
import { ENTER } from './keyCodes';

class Control extends Component {
  componentDidUpdate() {
    if (!this.props.focused) {
      return;
    }

    this.refs.control.focus();
  }

  onKeyDown(e) {
    if (e.which !== ENTER) {
      return;
    }

    this.props.onToggleMenu(e);
  }

  render() {
    const { disabled, invalid, open, onBlur, onToggleMenu, placeholder } = this.props;
    const controlClassNames = classnames('pickadilly__control', {
      'pickadilly__control--disabled': disabled,
      'pickadilly__control--invalid': invalid,
      'pickadilly__control--open': open,
    });
    const iconClassNames = classnames('pickadilly__icon', {
      'pickadilly__icon--chevrondown': !open,
      'pickadilly__icon--chevronup': open,
    });

    return (
      <div className={ controlClassNames }
          onBlur={ onBlur }
          onClick={ disabled ? null : onToggleMenu }
          onKeyDown={ disabled ? null : this.onKeyDown.bind(this) }
          onWheel={ open ? preventDefault : null }
          ref="control"
          tabIndex="0" >
        <span className="pickadilly__placeholder">
          { placeholder }
        </span>
        <i className={ iconClassNames }></i>
      </div>
    );
  }
}

Control.propTypes = {
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  invalid: PropTypes.bool,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onToggleMenu: PropTypes.func.isRequired,
};

export default Control;
