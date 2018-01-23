import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import Cloak from '../cloak/Cloak';
import Icon from '../icon/Icon';
import './EditableTitle.css';

export default class EditableTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component="label"
          className="ax-editable-title"
          cloakContainer>
        <div className="ax-editable-title__input">
          { children }
        </div>

        <div className="ax-editable-title__icon">
          <Cloak invisible>
            <Icon name="pencil" size="1.5rem" />
          </Cloak>
        </div>
      </Base>
    );
  }
}
