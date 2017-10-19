import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import TextIcon from '../typography/TextIcon';

export default class TableHeaderLabel extends Component {
  static propTypes = {
    /** Table header label */
    children: PropTypes.node,
    /** Expands table column */
    grow: PropTypes.bool,
    /** Marks label as selected */
    isSelected: PropTypes.bool,
    /** Makes label clickable */
    onClick: PropTypes.func,
    /** Shrinks table column */
    shrink: PropTypes.bool,
    /** Set text-align */
    textAlign: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    isSelected: false,
    textAlign: 'left',
  }

  render() {
    const {
      children,
      grow,
      isSelected,
      onClick,
      shrink,
      textAlign,
      ...rest
    } = this.props;

    const className = classnames(
      'ax-table__header-label',
      `ax-table__header-label--align-${textAlign}`,
      {
        'ax-table__header-label--grow': grow,
        'ax-table__header-label--selected': isSelected,
        'ax-table__header-label--shrink': shrink,
      }
    );

    const underlineClassName = classnames('ax-table__header-label-underline', {
      'ax-table__header-label-underline--selected': isSelected,
    });

    const order = xs => textAlign === 'left' ? xs : xs.reverse();

    const textIconProps = {
      [textAlign === 'left' ? 'spaceLeft' : 'spaceRight']: 'x2',
    };

    return (
      <Base { ...rest } Component="th" className={ className }>
        <div className={ underlineClassName }>{
          onClick ? <button className="ax-table__header-button" onClick={ onClick }>{order([
            children,
            <TextIcon key="icon" name="triangle-down" { ...textIconProps } />,
          ])}</button> : (
            children
          )
        }</div>
      </Base>
    );
  }
}
