import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderLabel,
  TableRow,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Table>
            <TableHeader>
              <TableHeaderLabel sortDirection="ascending">
                Column A
              </TableHeaderLabel>
              <TableHeaderLabel>Column B</TableHeaderLabel>
              <TableHeaderLabel>Column C</TableHeaderLabel>
              <TableHeaderLabel>Column D</TableHeaderLabel>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell isSelected>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
              </TableRow>

              <TableRow>
                <TableCell isSelected>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
              </TableRow>

              <TableRow>
                <TableCell isSelected>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
                <TableCell>Lorem ipsum dolar amor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/Table'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/TableBody'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/TableCell'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/TableHeader'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/TableHeaderLabel'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Table/TableRow'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
