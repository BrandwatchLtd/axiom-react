import React, { Component, PropTypes } from 'react';
import { Grid, GridCell, Italic, Paragraph, Strong, getCSSVar } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ColorSwatch.scss');
}

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { colors } = this.props;

    return (
      <Grid fill={ true } hGutters={ false }>
        { colors.map((color) =>
          <GridCell key={ color }>
            <Grid full="small" responsive={ false } textBreak="none">
              <GridCell>
                <div
                    className="dm-color-swatch__color"
                    style={ { backgroundColor: getCSSVar(color) } }/>
              </GridCell>

              <GridCell>
                <Paragraph>
                  <Strong>${ color }</Strong><br />
                  <Italic textSubtle={ true }>{ getCSSVar(color) }</Italic>
                </Paragraph>
              </GridCell>
            </Grid>
          </GridCell>
        ) }
      </Grid>
    );
  }
}
