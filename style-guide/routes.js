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
            apiDocs={ ['Alert'] }
            examples={ require('../src/components/alert/example') }
            component={ Doc } />
        <Route
            path="avatar"
            name="Avatar"
            apiDocs={ ['Avatar', 'Candytar'] }
            examples={ require('../src/components/avatar/example') }
            component={ Doc } />
        <Route
            path="badge"
            name="Badges"
            apiDocs={ ['Badge', 'BadgeGroup'] }
            examples={ require('../src/components/badge/example') }
            component={ Doc } />
        <Route
            path="base"
            name="Base Component"
            apiDocs={ ['Base'] }
            examples={ require('../src/components/base/example') }
            component={ Doc } />
        <Route
            path="button"
            name="Buttons"
            apiDocs={ ['Button', 'ButtonGroup', 'ButtonIcon'] }
            examples={ require('../src/components/button/example') }
            component={ Doc } />
        <Route
            path="card"
            name="Cards"
            apiDocs={ ['Card', 'CardList'] }
            examples={ require('../src/components/card/example') }
            component={ Doc } />
        <Route
            path="context"
            name="Context"
            apiDocs={ ['Context', 'ContextBox', 'ContextMenu', 'ContextMenuItem', 'ContextTip'] }
            examples={ require('../src/components/context/example') }
            component={ Doc } />
        <Route
            path="dialog"
            name="Dialog"
            apiDocs={ ['Dialog', 'DialogBody', 'DialogFooter', 'DialogHeader'] }
            examples={ require('../src/components/dialog/example') }
            component={ Doc } />
        <Route
            path="dropdown"
            name="Dropdown"
            apiDocs={ ['Dropdown', 'DropdownContent', 'DropdownMenu', 'DropdownMenuItem', 'DropdownTarget'] }
            examples={ require('../src/components/dropdown/example') }
            component={ Doc } />
        <Route
            path="form"
            name="Form & Inputs"
            apiDocs={ ['CheckBox', 'CheckBoxGroup', 'Form', 'RadioButton', 'RadioButtonGroup', 'TextArea', 'TextInput', 'TextInputIcon'] }
            examples={ require('../src/components/form/example') }
            component={ Doc } />
        <Route
            path="grid"
            name="Grid"
            apiDocs={ ['Grid', 'GridCell'] }
            examples={ require('../src/components/grid/example') }
            component={ Doc } />
        <Route
            path="icon"
            name="Icons"
            apiDocs={ ['Icon', 'IconButton', 'IconIndicator'] }
            examples={ require('../src/components/icon/example') }
            component={ Doc } />
        <Route
            path="image"
            name="Image"
            apiDocs={ ['Image', 'ImageCircle'] }
            examples={ require('../src/components/image/example') }
            component={ Doc } />
        <Route
            path="label"
            name="Labels"
            apiDocs={ ['Label', 'LabelGroup', 'LabelIcon'] }
            examples={ require('../src/components/label/example') }
            component={ Doc } />
        <Route
            path="list"
            name="List"
            apiDocs={ ['List', 'ListItem'] }
            examples={ require('../src/components/list/example') }
            component={ Doc } />
        <Route
            path="logo"
            name="Logo"
            apiDocs={ ['LogoBox', 'LogoTab', 'LogoHorizontal'] }
            examples={ require('../src/components/logo/example') }
            component={ Doc } />
        <Route
            path="menu"
            name="Menu"
            apiDocs={ ['Menu', 'MenuItem'] }
            examples={ require('../src/components/menu/example') }
            component={ Doc } />
        <Route
            path="position"
            name="Position"
            apiDocs={ ['Position', 'PositionContent', 'PositionTarget'] }
            examples={ require('../src/components/position/example') }
            component={ Doc } />
        <Route
            path="progress"
            name="Progress"
            apiDocs={ ['Progress', 'ProgressFinite', 'ProgressInfinite'] }
            examples={ require('../src/components/progress/example') }
            component={ Doc } />
        <Route
            path="reveal"
            name="Reveal"
            apiDocs={ ['Reveal'] }
            examples={ require('../src/components/reveal/example') }
            component={ Doc } />
        <Route
            path="table"
            name="Table"
            apiDocs={ ['Table', 'TableBody', 'TableCell', 'TableHead', 'TableRow'] }
            examples={ require('../src/components/table/example') }
            component={ Doc } />
        <Route
            path="tabset"
            name="Tabset"
            apiDocs={ ['Tabset', 'Tab'] }
            examples={ require('../src/components/tabset/example') }
            component={ Doc } />
        <Route
            path="tooltip"
            name="Tooltip"
            apiDocs={ ['Tooltip', 'TooltipContent', 'TooltipTarget'] }
            examples={ require('../src/components/tooltip/example') }
            component={ Doc } />
        <Route
            path="typography"
            name="Typography"
            apiDocs={ ['Heading', 'HorizontalRule', 'Italic', 'Link', 'Paragraph', 'Small', 'Strike', 'Strong', 'Underline', 'Weak'] }
            examples={ require('../src/components/typography/example') }
            component={ Doc } />
      </Route>

      <Route path="composites" name="Composites">
        <Route
            path="login"
            name="Login Page"
            apiDocs={ ['Login'] }
            examples={ require('../src/composites/login/example') }
            component={ Doc } />
        <Route
            path="pagination"
            name="Pagination"
            apiDocs={ ['Pagination'] }
            examples={ require('../src/composites/pagination/example') }
            component={ Doc } />
        <Route
            path="usermenu"
            name="User Menu"
            apiDocs={ ['UserMenu'] }
            examples={ require('../src/composites/usermenu/example') }
            component={ Doc } />
      </Route>

      <Route path="charts" name="Charts & Visualisations">
        <Route
            path="chart-heading"
            name="Chart Heading"
            apiDocs={ ['ChartHeading'] }
            examples={ require('../src/charts/chart-heading/example') }
            component={ Doc } />
        <Route
            path="chart-panel"
            name="Chart Panel"
            apiDocs={ ['ChartPanels', 'ChartPanel', 'ChartPanelBody', 'ChartPanelHeader'] }
            examples={ require('../src/charts/chart-panel/example') }
            component={ Doc } />
        <Route
            path="data-point"
            name="Data Points"
            apiDocs={ ['DataPoints', 'DataPoint'] }
            examples={ require('../src/charts/data-point/example') }
            component={ Doc } />
        <Route
            path="dot-plot"
            name="Dot Plot"
            apiDocs={ ['DotPlot', 'Dot'] }
            examples={ require('../src/charts/dot-plot/example') }
            component={ Doc } />
        <Route
            path="wordcloud"
            name="Word Cloud"
            apiDocs={ ['WordCloud', 'Word'] }
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
