import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, ChartAxisLabels, ChartAxisTitle } from 'bw-axiom';

export default class ChartTableAxis extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    labels: [
      '0%',
      '10%',
      '20%',
      '30%',
      '40%',
      '50%',
      '60%',
      '70%',
      '80%',
      '90%',
      '100%',
    ],
  };

  static contextTypes = {
    labelColumnWidth: PropTypes.string.isRequired,
  };

  render() {
    const { labelColumnWidth } = this.context;
    const { labels, title, ...rest } = this.props;

    return (
      <Base { ...rest }
          className="ax-chart-table__axis"
          space="tiny">
        <Base space="tiny">
          <ChartAxisLabels
              labels={ labels }
              style={ { marginLeft: labelColumnWidth } } />
        </Base>

        { title && (
          <ChartAxisTitle>
            { title }
          </ChartAxisTitle>
        ) }
      </Base>
    );
  }
}
