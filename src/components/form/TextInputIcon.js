import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from '../icon/Icon';
import Link from '../typography/Link';

export const TextInputIconRef = 'TextInputIcon';

export default class TextInputIcon extends Component {
  static propTypes = {
    /** Alignment inside the input field */
    align: PropTypes.oneOf(['left', 'right']),
    /** Name of the icon. See <Icon>. */
    name: PropTypes.string.isRequired,
    /** Click handler, applies styling to indicate it is clickable. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    align: 'right',
  };

  static typeRef = TextInputIconRef;

  render () {
    const { align, name, onClick, ...rest } = this.props;
    const className = classnames('ax-input__icon', {
      [`ax-input__icon--align-${align}`]: align,
    });

    return (
      <span className={ className }>
        {
          onClick ? (
            <Link { ...rest } onClick={ onClick } style="subtle">
              <Icon name={ name } size="1rem" />
            </Link>
          ) : (
            <Icon name={ name } size="1rem" />
          )
        }
      </span>
    );
  }
}
