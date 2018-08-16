import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class CardContent extends Component {
  static propTypes = {
    /** Content to be inserted inside the Card */
    children: PropTypes.node.isRequired,
    /** Indent the separator */
    separatorIndented: PropTypes.bool,
    /** Style of the separator */
    separatorStyle: PropTypes.oneOf(['dotted', 'solid']),
    /** Increases/decreases the size of the content */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    separatorStyle: 'solid',
    size: 'medium',
  }

  render() {
    const { children, separatorIndented, separatorStyle, size, ...rest } = this.props;
    const classes = classnames('ax-card__content',
      `ax-card__content--separator-${separatorStyle}`,
      `ax-card__content--size-${size}`, {
        'ax-card__content--separator-indented': separatorIndented,
      }
    );

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
