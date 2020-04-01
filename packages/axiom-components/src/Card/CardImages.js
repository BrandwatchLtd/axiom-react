import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import CardImage from './CardImage';

export default class CardImages extends Component {
  static propTypes = {
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /**
     * Aspect ratios for the height of the container depending on how many
     * images should be shown
     */
    ratios: PropTypes.array.isRequired,
    /** The multiple image sources to be used inside the image grid */
    srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    ratios: [null, '50%', '75%', '100%'],
  };

  render() {
    const { className, ratios, srcs, ...rest } = this.props;
    const ratio = ratios[srcs.length - 1];
    const style = { paddingBottom: ratio };
    const classes = classnames(
      'ax-card__images',
      `ax-card__images--${srcs.length}`,
      {
        'ax-card__images--ratio': ratio,
      },
      className
    );

    return (
      <Base {...rest} className={classes} style={style}>
        {ratio ? (
          <div className="ax-card__images-grid">
            {srcs.map((src, index) => (
              <div
                className="ax-card__images-grid-item"
                key={index}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        ) : (
          <CardImage src={srcs[0]} />
        )}
      </Base>
    );
  }
}
