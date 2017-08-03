import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon, Link } from 'bw-axiom';

export default class TextInputIcon extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    align: 'right',
  }

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
