import React, { Component } from 'react';
import {
  Chart,
  ChartBody,
  ChartHeader,
  ChartKey,
  ChartKeyItem,
  ChartTitle,
  DataPoint,
  DataPoints,
  DotPlotChart,
} from '@brandwatch/axiom-charts';
import {
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  Grid,
  GridCell,
  Link,
  TextIcon,
  Toggle,
  Tool,
  Toolbar,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { dotPlotData, dotPlotKey } from './chartData';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Chart>
            <ChartHeader>
              <Grid responsive={ false }>
                <GridCell>
                  <ChartTitle>Chart title</ChartTitle>
                </GridCell>

                <GridCell none>
                  <Toolbar>
                    <Tool>
                      <Toggle onToggle={ () => {} } toggled>Zoom</Toggle>
                    </Tool>

                    <Tool>
                      <Dropdown flip="mirror" showArrow={ false }>
                        <DropdownTarget>
                          <Link style="subtle">
                            Options
                            <TextIcon name="chevron-down" />
                          </Link>
                        </DropdownTarget>

                        <DropdownSource>
                          <DropdownContext>
                            <DropdownMenu>
                              <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                              <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                              <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                              <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                            </DropdownMenu>
                          </DropdownContext>
                        </DropdownSource>
                      </Dropdown>
                    </Tool>
                  </Toolbar>
                </GridCell>
              </Grid>
            </ChartHeader>

            <ChartBody>
              <DotPlotChart
                  axisTitle="% of each something"
                  chartKey={ dotPlotKey }
                  chartKeyBenchmarkLabel="Benchmark"
                  chartKeyDifferenceLabel="Size of Difference"
                  collapsedVisibleRowCount={ 6 }
                  data={ dotPlotData }
                  expandButtonSuffix="Categories"
                  labelColumnWidth="11rem"
                  xAxisLabels={ () => [ '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'] }/>
            </ChartBody>
          </Chart>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/Chart'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/ChartBody'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/ChartHeader'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/ChartTitle'),
        ] } />

        <DocumentationShowCase>
          <ChartKey>
            <ChartKeyItem label="Lorem ipsum">
              <DataPoints size="0.75rem">
                <DataPoint color="giant-leap" />
              </DataPoints>
            </ChartKeyItem>

            <ChartKeyItem label="Lorem ipsum">
              <DataPoints size="0.75rem">
                <DataPoint color="critical-mass" />
              </DataPoints>
            </ChartKeyItem>
            <ChartKeyItem label="Lorem ipsum">
              <DataPoints size="0.75rem">
                <DataPoint color="blast-off" />
              </DataPoints>
            </ChartKeyItem>
          </ChartKey>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/ChartKey'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Chart/ChartKeyItem'),
        ] } />
      </DocumentationContent>
    );
  }
}
