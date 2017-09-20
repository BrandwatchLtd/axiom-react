import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component } from 'react';
import Base from '../../components/base/Base';

export default class WordCloud extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Height of the WordCloud view box that the words y
     * coordinates are plotted against
     */
    height: PropTypes.number.isRequired,
    /**
     * Width of the WordCloud view box that the words x
     * coordinates are plotted against
     */
    width: PropTypes.number.isRequired,
  };

  render() {
    const {
      children,
      height,
      width,
      ...rest
    } = this.props;

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-word-cloud"
          height="100%"
          version="1.1"
          viewBox={ `0 0 ${width} ${height}` }
          width="100%">
        { Children.map(children, (child, index) =>
          cloneElement(child, {
            animationDelay: `${ index * 10 + 200 }ms`,
          })
        ) }
      </Base>
    );
  }
}
