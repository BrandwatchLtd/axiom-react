import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../../../components/base/Base';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import Paragraph from '../../../components/typography/Paragraph';
import './ColorSwatch.css';

export default class ColorSwatch extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.colorEls = {};
    this.state = {};
  }

  componentDidMount() {
    this.updateColors();
  }

  componentDidUpdate() {
    this.updateColors();
  }

  updateColors() {
    Object.keys(this.colorEls).forEach((key) => {
      const { backgroundColor } = window.getComputedStyle(this.colorEls[key]);
      const [r, g, b, a] = backgroundColor.match(/(\d\.?)+/g);
      const hex = `#${(+r).toString(16)}${(+g).toString(16)}${(+b).toString(16)}`;
      const alpha = a !== undefined && Math.round(+a * 100);

      if (!this.state[key] || this.state[key].hex !== hex) {
        this.setState({
          [key]: { alpha, hex },
        });
      }
    });
  }

  render() {
    const { colors, name } = this.props;

    return (
      <Base space="x6">
        <Heading space="x3" textCase="capital">{ name }</Heading>
        <Grid gutters="tiny" responsive={ false } space="x3">
          { colors.map(({ name, variable }) =>
            <GridCell
                key={ variable }
                shrink
                textCenter
                textSize="small"
                textStrong>
              <div
                  className="dm-color-swatch"
                  ref={ (el) => this.colorEls[name] = el }
                  style={ { backgroundColor: `var(--color-${variable})` } } />
              <Paragraph space="x0">{ name }</Paragraph>
              { this.state[name] && (
                <Paragraph
                    space="x0"
                    textCase="upper"
                    textColor="subtle">
                  { this.state[name].hex }
                </Paragraph>
              ) }

              { this.state[name] && this.state[name].alpha && (
                <Paragraph
                    space="x0"
                    textColor="subtle">
                  A: { this.state[name].alpha }%
                </Paragraph>
              ) }
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
