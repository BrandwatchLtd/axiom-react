import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Pictogram.css';

const PICTOGRAM_NAME_MAP = {
  '3d-globe': require('./svgs/3d-globe.svg'),
  annotation: require('./svgs/annotation.svg'),
  'bar-chart': require('./svgs/bar-chart.svg'),
  'bar-percent-chart': require('./svgs/bar-percent-chart.svg'),
  'choropleth-map': require('./svgs/choropleth-map.svg'),
  'circle-pack': require('./svgs/circle-pack.svg'),
  'column-chart': require('./svgs/column-chart.svg'),
  'date-&-time': require('./svgs/date-&-time.svg'),
  'featured-content': require('./svgs/featured-content.svg'),
  female: require('./svgs/female.svg'),
  'file-upload': require('./svgs/file-upload.svg'),
  'frequency-heatmap': require('./svgs/frequency-heatmap.svg'),
  individual: require('./svgs/individual.svg'),
  'key-stat': require('./svgs/key-stat.svg'),
  male: require('./svgs/male.svg'),
  networks: require('./svgs/networks.svg'),
  organisation: require('./svgs/organisation.svg'),
  'pie-chart': require('./svgs/pie-chart.svg'),
  'polar-chart': require('./svgs/polar-chart.svg'),
  'spline-chart': require('./svgs/spline-chart.svg'),
  'stream-graph': require('./svgs/stream-graph.svg'),
  table: require('./svgs/table.svg'),
  'tree-map': require('./svgs/tree-map.svg'),
  'twitter-verified': require('./svgs/twitter-verified.svg'),
  video: require('./svgs/video.svg'),
  weather: require('./svgs/weather.svg'),
  'web-url': require('./svgs/web-url.svg'),
  'word-cloud': require('./svgs/word-cloud.svg'),
};

export default class Pictogram extends Component {
  static propTypes = {
    /** Name of the pictogram that will be displayed */
    name: PropTypes.oneOf([
      '3d-globe',
      'annotation',
      'bar-chart',
      'bar-percent-chart',
      'choropleth-map',
      'circle-pack',
      'column-chart',
      'date-&-time',
      'featured-content',
      'female',
      'file-upload',
      'frequency-heatmap',
      'individual',
      'key-stat',
      'male',
      'networks',
      'organisation',
      'pie-chart',
      'polar-chart',
      'spline-chart',
      'stream-graph',
      'table',
      'tree-map',
      'twitter-verified',
      'video',
      'weather',
      'web-url',
      'word-cloud',
    ]),
    /** Size of pictogram (with unit) */
    size: PropTypes.string,
  };

  static defaultProps = {
    size: '3rem',
  };

  render() {
    const { name, size, ...rest } = this.props;
    const style = { width: size, height: size };

    if (!PICTOGRAM_NAME_MAP[name]) {
      return null;
    }

    const { body, viewBox } = PICTOGRAM_NAME_MAP[name];

    return (
      <Base
        {...rest}
        Component="svg"
        className="ax-pictogram"
        dangerouslySetInnerHTML={{ __html: body }}
        style={style}
        viewBox={viewBox}
      />
    );
  }
}
