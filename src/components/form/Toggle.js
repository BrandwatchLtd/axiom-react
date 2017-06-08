import { Base } from 'bw-axiom';
import React, { Component, PropTypes } from 'react';
import './Toggle.css';

export default class Toggle extends Component {
  static propTypes = {
    toggled: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  render () {
    const { toggled, onToggle, ...rest } = this.props;

    return (
      <Base Component="span" className="ax-toggle" space="tiny">
        <input { ...rest }
            checked={ toggled }
            className="ax-toggle__input"
            onChange={ onToggle }
            type="checkbox" />
        <span className="ax-toggle__appearance" />
      </Base>
    );
  }
}
