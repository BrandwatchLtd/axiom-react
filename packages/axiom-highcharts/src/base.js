export default {
  global: {
    useUTC: true
  },
  chart: {
    reflow: false,
    animation: false,
  },
  title: {
    text: null
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: true,
    buttons: null,
    fallbackToExportServer: true,
    url: '/exportchart'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
      }
    },
    bar: {
      states: {
        hover: {
          enabled: false
        }
      },
      pointPadding: 0,
      groupPadding: 0
    },
    column: {
      states: {
        hover: {
          enabled: false
        }
      },
      stacking: 'normal',
      pointPadding: 0.05,
      groupPadding: 0,
      borderWidth: 0.1,
      lineWidth: 0
    },
    series: {
      cursor: 'pointer',
      animation: false,
      marker: {
        symbol: 'circle',
        lineWidth: 10
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size: 13px">{point.key}</span><br/>',
  },
  xAxis: {
    title: {
      text: ''
    },
    minPadding: 0.05,
    maxPadding: 0.05,
    startOnTick: false,
    endOnTick: false,
    // prevent ticks to go deeper than days (only datetime axis)
    dateTimeLabelFormats: {
      day: '%e %b',
      week: '%e %b',
      month: '%b %Y'
    },
    units: [
      [
        'day', [1, 2]
      ],
      [
        'week', [1, 2]
      ],
      [
        'month', [1, 2, 3, 4, 6]
      ],
      [
        'year', [1]
      ]
    ]
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: ''
    },
    startOnTick: false,
    endOnTick: false,
    min: 0,
  },
};
