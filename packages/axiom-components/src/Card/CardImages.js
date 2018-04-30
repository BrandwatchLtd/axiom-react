import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import CardImage from './CardImage';

export default class CardImages extends Component {
  static propTypes = {
    /** The multiple image sources to be used inside the image grid */
    srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { srcs, ...rest } = this.props;
    const classes = classnames('ax-card__images', `ax-card__images--${srcs.length}`);

    return (
      <Base { ...rest } className={ classes }>
        { srcs.length === 1 ? (
          <CardImage src={ srcs[0] } />
        ) : (
          <div className="ax-card__images-grid">
            { srcs.map((src, index) => (
              <div
                  className="ax-card__images-grid-item"
                  key={ index }
                  style={ { backgroundImage: `url(${src})` } } />
            )) }
          </div>
        ) }
      </Base>
    );
  }
}
