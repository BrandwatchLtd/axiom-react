import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import { Base } from 'bw-axiom';
import './DataPoints.css';

const VB_HEIGHT = 24;

export default class DataPoints extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string.isRequired,
  };

  render() {
    const { children, height, ...rest } = this.props;
    const style = { height, width: height };

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-data-points"
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
