import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Italic from '../../../components/typography/Italic';
import Paragraph from '../../../components/typography/Paragraph';
import Strong from '../../../components/typography/Strong';
import './ColorSwatch.css';

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { colors } = this.props;

    return (
      <Grid fill horizontalGutters={ false }>
        { colors.map((color) =>
          <GridCell key={ color }>
            <Grid
                full="small"
                responsive={ false }
                textBreak="none"
                verticalAlign="middle"
                verticalGutters="tiny">
              <GridCell>
                <div
                    className="dm-color-swatch"
                    style={ { backgroundColor: `var(--color-${color})` } } />
              </GridCell>

              <GridCell>
                <Paragraph space="x0">
                  <Strong>{ color }</Strong>
                </Paragraph>

                <Paragraph space="x0">
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
