import React, { Children, Component, PropTypes, cloneElement } from 'react';
import { Base } from 'bw-axiom';

const VB_HEIGHT = 24;
const DATA_POINT_GROUP_SHIFT = 8;
const BORDER_WIDTH = 1.5;

function getWidth(type, count) {
  return type === 'grouped'
    ? VB_HEIGHT + (DATA_POINT_GROUP_SHIFT * (count - 1))
    : VB_HEIGHT;
}

function getBorderWidth(type) {
  return type === 'grouped'
    ? BORDER_WIDTH
    : 0;
}

function getX(type, width, n) {
  return type === 'grouped'
    ? (VB_HEIGHT / 2) + (n * DATA_POINT_GROUP_SHIFT)
    : (width / 2);
}

function getRadius(type, count, n) {
  return type === 'grouped'
    ? (VB_HEIGHT / 2) + (BORDER_WIDTH / 2)
    : ((VB_HEIGHT / 2) / count) * (count - n);
}

export default class DataPoints extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['grouped', 'stacked']),
  };

  static defaultProps = {
    type: 'stacked',
  };

  render() {
    const { children, type, ...rest } = this.props;
    const arrayChildren = Children.toArray(children);
    const vbWidth = getWidth(type, arrayChildren.length);

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-data-points"
          viewBox={ `0 0 ${vbWidth} ${VB_HEIGHT}` }>
        { arrayChildren.map((child, n) =>
          cloneElement(child, {
            borderWidth: getBorderWidth(type),
            radius: getRadius(type, arrayChildren.length, n),
            x: getX(type, vbWidth, n),
            y: VB_HEIGHT / 2,
          })
        ) }
      </Base>
    );
  }
}
