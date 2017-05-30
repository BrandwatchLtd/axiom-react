import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import { Base } from 'bw-axiom';
import './DataPoints.css';

const VB_HEIGHT = 24;

export default class DataPoints extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { children, onClick, size, ...rest } = this.props;
    const style = { height: size, width: size };
    const classes = classnames('ax-data-points', {
      'ax-data-points--clickable': onClick,
    });

    return (
      <Base { ...rest }
          Component="svg"
          className={ classes }
          onClick={ onClick }
          preserveAspectRatio="xMinYMin meet"
          style={ style }
          viewBox={ `0 0 ${VB_HEIGHT} ${VB_HEIGHT}` }>
        { Children.toArray(children).map((child, n, { length }) =>
          cloneElement(child, {
            radius: ((VB_HEIGHT / 2) / length) * (length - n),
            x: (VB_HEIGHT / 2),
            y: VB_HEIGHT / 2,
          })
        ) }
      </Base>
    );
  }
}
