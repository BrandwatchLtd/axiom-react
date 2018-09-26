import './styles/axiom-highcharts.css';
import base from './base';
import Highcharts from 'highcharts/js/highcharts';

if (Highcharts.setOptions && typeof Highcharts.setOptions === 'function') {
  Highcharts.setOptions(base);
}

export default Highcharts;
