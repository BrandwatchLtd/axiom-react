import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class MenuItem extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Applies styling to indicate it is active */
    active: PropTypes.bool,
    /** Content inside the MenuItem */
    children: PropTypes.node,
    /** Applies styling to indicate it is disabled, and blocks interactions */
    disabled: PropTypes.bool,
  };

  static contextTypes = {
    size: PropTypes.string.isRequired,
  };

  render() {
    const { size } = this.context;
    const { children, active, disabled, ...rest } = this.props;
    const classes = classnames('ax-menu__item', {
      'ax-menu__item--active': active,
      'ax-menu__item--disabled': disabled,
    });

    const textSize = {
      medium: 'headtitle',
      large: 'headline',
    }[size];

    return (
      <Base
          Component="li"
          className={ classes }
          textSize={ textSize }
          textStrong>
        <button { ...rest } className="ax-menu__item-button" disabled={ disabled }>
          { children }
        </button>
      </Base>
    );
  }
}
