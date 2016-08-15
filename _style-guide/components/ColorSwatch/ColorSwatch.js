import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { colorAccentBaseVariation, colorBaseVariation } from 'bw-axiom/design-patterns/colors/_vars';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Strong from 'bw-axiom/components/typography/Strong';

if (__INCLUDE_CSS__) {
  require('./ColorSwatch.scss');
}

export default class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, color } = this.props;
    const nonAccents = Object.keys(color).filter((key) => /^\d/.test(key));
    const accents = Object.keys(color).filter((key) => /^A/.test(key));

    return (
      <div className="dm-color-box__container">
        <div className={ `dm-color-box dm-color-box--base dm-color--${name}--${colorBaseVariation}` }>
          <Strong textEllipsis={ true }>$color-{ name }</Strong>
          <div className="dm-color-box--base__stats">
            <Grid responsive={ false }>
              <GridCell>
                { colorBaseVariation }
              </GridCell>

              <GridCell shrink={ true }>
                { color[colorBaseVariation] }
              </GridCell>
            </Grid>
          </div>
        </div>

        { nonAccents.map((variation) =>
          <div className={ `dm-color-box dm-color--${name}--${variation}` } key={ variation }>
            <Grid responsive={ false }>
              <GridCell>
                { variation }
              </GridCell>

              <GridCell shrink={ true }>
                { color[variation] }
              </GridCell>
            </Grid>
          </div>
        ) }

        { do {
          if (color.hasOwnProperty(colorAccentBaseVariation)) {
            accents.map((variation, vIndex) => {
              const classes = classNames(
                'dm-color-box',
                `dm-color--${name}--${variation}`, {
                  'dm-color-box--accent': vIndex === 0,
                },
              );

              return (
                <div className={ classes } key={ variation }>
                  <Grid responsive={ false }>
                    <GridCell>
                      { variation }
                    </GridCell>

                    <GridCell shrink={ true }>
                      { color[variation] }
                    </GridCell>
                  </Grid>
                </div>
              );
            });
          }
        } }
      </div>
    );
  }
}
