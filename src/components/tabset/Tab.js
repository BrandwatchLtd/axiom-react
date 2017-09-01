import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class Tab extends Component {
  static propTypes = {
    /** SKIP */
    active: PropTypes.bool,
    /** Content that is visible when the Tab is active */
    children: PropTypes.node,
    /** Applies styling to indicate it is inactive, and prevents it from being clicked */
    disabled: PropTypes.bool,
    /** Title that is placed with the Tab */
    title: PropTypes.node,
  };

  render() {
    /* eslint-disable react/prop-types */
    const { active, disabled, onClick, title, ...rest } = this.props;
    /* eslint-enable react/prop-types */
    const classes = classnames('ax-tabset__list-item', {
      'ax-tabset__list-item--active': active,
      'ax-tabset__list-item--disabled': disabled,
    });

    return (
      <Base { ...rest }
          Component="li"
          className={ classes }
          textSize="small"
          textStrong={ true }
          title={ title }>
        <button { ...rest }
            className="ax-tabset__button"
            disabled={ disabled }
            onClick={ onClick }>
          { title }
        </button>
      </Base>
    );
  }
}
