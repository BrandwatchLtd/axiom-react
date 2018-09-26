import React, { Component } from 'react';
import { Highcharts, HighchartsReact } from '@brandwatch/axiom-highcharts';
import { Context, Heading } from '@brandwatch/axiom-components';

export default class AxiomHighchartsLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inSelectMode: false,
      selectedItem: null,
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    let self = this;

    this.ref.current.container.addEventListener('click', function (e) {
      let chart = self.ref.current.chart;
      let point = chart.getSelectedPoints()[0];
      let newState = {};

      if (!self.state.inSelectMode && e.target.classList.contains('highcharts-point-select')) {
        let left = chart.plotLeft + point.plotX + 30;
        let top = chart.plotTop + point.plotY - 20;

        if (point.graphic) {
          newState = {
            inSelectMode: true,
            selectedItem: point,
            left,
            top
          };
        }
      } else {
        newState = {
          inSelectMode: false,
          selectedItem: null,
        };
      }

      self.setState(newState, () => {
        let options = {
          plotOptions: {
            series: {
              enableMouseTracking: !newState.inSelectMode
            },
          },
          tooltip: {
            enabled: !newState.inSelectMode
          }
        };

        chart.update(options);
      });
    });
  }

  componentDidUpdate() {
    if (this.state.inSelectMode) {
      this.switchToSelectMode();
    } else {
      this.switchToDefaultMode();
    }
  }

  switchToSelectMode(args) {
    console.log('show select mode');
  }

  switchToDefaultMode() {
    console.log('show default mode');
  }

  render() {
    return (
      <div>
        <HighchartsReact
          ref={this.ref}
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'line',
              height: 400,
              zoomType: 'x',
            },
            xAxis: {
              type: 'datetime',
            },
            yAxis: {
              title: {
                text: 'Volume of Total Mentions Daily'
              },
              tickInterval: 10,
              endOnTick: true
            },
            plotOptions: {
              series: {
                pointStart: Date.UTC(2017, 11, 1),
                pointInterval: 24 * 36e5,
                allowPointSelect: true,
                // point: {
                //   events: {
                //     select: function () {
                //       this.series.chart.selectMode = !this.series.chart.selectMode;
                //     }
                //   }
                // }
              }
            },
            tooltip: {
              outside: true
            },
            series: [{
              name: 'Series 1',
              data: [7, 7, 14, 7, 8, 7, 6, 9, 15, 11, 12, 8, 2, 7, 16, 9, 17, 18, 23, 17, 21, 12, 13, 14, 15, 18, 14],
            }, {
              name: 'Series 2',
              data: [14, 18, 15, 14, 13, 12, 21, 17, 23, 18, 17, 9, 16, 7, 2, 8, 12, 11, 15, 9, 6, 7, 8, 7, 14, 7, 7],
            }, {
              colorIndex: 'blast-off',
              name: 'Series 3',
              data: [23, 28, 12, 18, 20, 22, 21, 37, 13, 8, 7, 13, 21, 18, 23, 11, 20, 16, 10, 15, 12, 17, 18, 37, 12, 9, 14],
            }]
          }}
        />
        {
        //  better to use popper.js here
        }
        {
          this.state.inSelectMode ?
            (
              <div style={{
                position: 'absolute',
                left: this.state.left - (232 / 2),
                top: this.state.top,
              }}>
                <Context position='bottom'>
                  <Heading textSize="large">{this.state.selectedItem.series.name}: {this.state.selectedItem.y}</Heading>
                  <ul>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                  </ul>
                </Context>
              </div>
            ) : null
        }
      </div>
    );
  }
}
