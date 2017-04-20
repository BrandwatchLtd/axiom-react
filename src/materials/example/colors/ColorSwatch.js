import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, GridCell, Italic, Paragraph, Strong } from 'bw-axiom';
import './ColorSwatch.css';

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { colors } = this.props;

    return (
      <Grid fill={ true } horizontalGutters={ false }>
        { colors.map((color) =>
          <GridCell key={ color }>
            <Grid
                full="small"
                responsive={ false }
                textBreak="none"
                verticalAlign="middle"
                verticalGutters="tiny">
              <GridCell>
                <div className={ classnames('dm-color-swatch', `dm-color-swatch--${color}`) } />
              </GridCell>

              <GridCell>
                <Paragraph space="none">
                  <Strong>{ color }</Strong>
                </Paragraph>

                <Paragraph space="none">
                  <Italic textColor="subtle">var(--color-{ color })</Italic>
                </Paragraph>
              </GridCell>
            </Grid>
          </GridCell>
        ) }
      </Grid>
    );
  }
}
