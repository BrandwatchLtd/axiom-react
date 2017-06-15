import React from 'react';
import { IndexRedirect, Route } from 'react-router';
import App from './containers/App';
import Doc from './containers/Doc';
import Labs from './containers/Labs';

/* eslint-disable react/jsx-sort-props, max-len */
export default (
  <Route path="/">
    <IndexRedirect to="docs/materials/colors" />

    <Route path="docs" component={ App }>
      <Route path="materials" name="Materials">
        <Route
            path="colors"
            name="Colors"
            examples={ require('../src/materials/example/colors') }
            component={ Doc } />
        <Route
            path="date-and-time"
            name="Date and Time"
            examples={ require('../src/materials/example/date-and-time') }
            component={ Doc } />
        <Route
            path="numbers"
            name="Numbers"
            examples={ require('../src/materials/example/numbers') }
            component={ Doc } />
      </Route>

      <Route path="components" name="Components">
        <Route
            path="alert"
            name="Alerts"
            examples={ require('../src/components/alert/example') }
            component={ Doc } />
        <Route
            path="avatar"
            name="Avatar"
            examples={ require('../src/components/avatar/example') }
            component={ Doc } />
        <Route
            path="badge"
            name="Badges"
            examples={ require('../src/components/badge/example') }
            component={ Doc } />
        <Route
            path="base"
            name="Base Component"
            examples={ require('../src/components/base/example') }
            component={ Doc } />
        <Route
            path="button"
            name="Buttons"
            examples={ require('../src/components/button/example') }
            component={ Doc } />
        <Route
            path="card"
            name="Cards"
            examples={ require('../src/components/card/example') }
            component={ Doc } />
        <Route
            path="color-picker"
            name="Color Picker"
            examples={ require('../src/components/color-picker/example') }
            component={ Doc } />
        <Route
            path="context"
            name="Context"
            examples={ require('../src/components/context/example') }
            component={ Doc } />
        <Route
            path="data-picker"
            name="Data Picker"
            examples={ require('../src/components/data-picker/example') }
            component={ Doc } />
        <Route
            path="dialog"
            name="Dialog"
            examples={ require('../src/components/dialog/example') }
            component={ Doc } />
        <Route
            path="dropdown"
            name="Dropdown"
            examples={ require('../src/components/dropdown/example') }
            component={ Doc } />
        <Route
            path="form"
            name="Form & Inputs"
            examples={ require('../src/components/form/example') }
            component={ Doc } />
        <Route
            path="grid"
            name="Grid"
            examples={ require('../src/components/grid/example') }
            component={ Doc } />
        <Route
            path="icon"
            name="Icons"
            examples={ require('../src/components/icon/example') }
            component={ Doc } />
        <Route
            path="image"
            name="Image"
            examples={ require('../src/components/image/example') }
            component={ Doc } />
        <Route
            path="label"
            name="Labels"
            examples={ require('../src/components/label/example') }
            component={ Doc } />
        <Route
            path="list"
            name="List"
            examples={ require('../src/components/list/example') }
            component={ Doc } />
        <Route
            path="logo"
            name="Logo"
            examples={ require('../src/components/logo/example') }
            component={ Doc } />
        <Route
            path="menu"
            name="Menu"
            examples={ require('../src/components/menu/example') }
            component={ Doc } />
        <Route
            path="pagination"
            name="Pagination"
            examples={ require('../src/components/pagination/example') }
            component={ Doc } />
        <Route
            path="panel"
            name="Panel"
            examples={ require('../src/components/panel/example') }
            component={ Doc } />
        <Route
            path="pictogram"
            name="Pictogram"
            examples={ require('../src/components/pictogram/example') }
            component={ Doc } />
        <Route
            path="position"
            name="Position"
            examples={ require('../src/components/position/example') }
            component={ Doc } />
        <Route
            path="progress"
            name="Progress"
            examples={ require('../src/components/progress/example') }
            component={ Doc } />
        <Route
            path="reveal"
            name="Reveal"
            examples={ require('../src/components/reveal/example') }
            component={ Doc } />
        <Route
            path="statcard"
            name="Stat Cards"
            examples={ require('../src/components/statcard/example') }
            component={ Doc } />
        <Route
            path="table"
            name="Table"
            examples={ require('../src/components/table/example') }
            component={ Doc } />
        <Route
            path="tabset"
            name="Tabset"
            examples={ require('../src/components/tabset/example') }
            component={ Doc } />
        <Route
            path="toolbar"
            name="Toolbar"
            examples={ require('../src/components/toolbar/example') }
            component={ Doc } />
        <Route
            path="tooltip"
            name="Tooltip"
            examples={ require('../src/components/tooltip/example') }
            component={ Doc } />
        <Route
            path="typography"
            name="Typography"
            examples={ require('../src/components/typography/example') }
            component={ Doc } />
      </Route>

      <Route path="composites" name="Composites">
        <Route
            path="login"
            name="Login Page"
            examples={ require('../src/composites/login/example') }
            component={ Doc } />
        <Route
            path="usermenu"
            name="User Menu"
            examples={ require('../src/composites/usermenu/example') }
            component={ Doc } />
      </Route>

      <Route path="charts" name="Charts & Visualisations">
        <Route
            path="bars"
            name="Bars"
            examples={ require('../src/charts/bars/example') }
            component={ Doc } />
        <Route
            path="bar-chart"
            name="Bar Chart"
            examples={ require('../src/charts/bar-chart/example') }
            component={ Doc } />
        <Route
            path="chart"
            name="Chart"
            examples={ require('../src/charts/chart/example') }
            component={ Doc } />
        <Route
            path="chart-heading"
            name="Chart Heading"
            examples={ require('../src/charts/chart-heading/example') }
            component={ Doc } />
        <Route
            path="column-chart"
            name="Column Chart"
            examples={ require('../src/charts/column-chart/example') }
            component={ Doc } />
        <Route
            path="data-point"
            name="Data Points"
            examples={ require('../src/charts/data-point/example') }
            component={ Doc } />
        <Route
            path="dot-plot"
            name="Dot Plot"
            examples={ require('../src/charts/dot-plot/example') }
            component={ Doc } />
        <Route
            path="wordcloud"
            name="Word Cloud"
            examples={ require('../src/charts/wordcloud/example') }
            component={ Doc } />
      </Route>

      { __DEVELOPMENT__ && (
        <Route
            path="labs"
            name="Labs"
            component={ Labs } />
      ) }
    </Route>
  </Route>
);
/* eslint-enable react/jsx-sort-props, max-len */
