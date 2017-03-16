import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Table, TableHead, TableRow, TableCell, TableBody, Strong } from 'bw-axiom';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Horizontal Gutters">
        <Snippet>
          <Table borders={ false } compact={ true } hGutters="small">
            <TableHead>
              <TableRow snippetReplace={ true }>
                <TableCell>
                  <Strong snippetIgnore={ true }>Id</Strong>
                </TableCell>
                <TableCell>
                  <Strong snippetIgnore={ true }>First name</Strong>
                </TableCell>
                <TableCell>
                  <Strong snippetIgnore={ true }>Last name</Strong>
                </TableCell>
                <TableCell>
                  <Strong snippetIgnore={ true }>City</Strong>
                </TableCell>
                <TableCell>
                  <Strong snippetIgnore={ true }>Birthday</Strong>
                </TableCell>
                <TableCell>
                  <Strong snippetIgnore={ true }>Enabled</Strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow snippetReplace={ true }>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  Max
                </TableCell>
                <TableCell>
                  Mustermann
                </TableCell>
                <TableCell>
                  Stuttgart
                </TableCell>
                <TableCell>
                  17-Apr-1990
                </TableCell>
                <TableCell>
                  Enabled
                </TableCell>
              </TableRow>
              <TableRow snippetReplace={ true }>
                <TableCell>
                  26
                </TableCell>
                <TableCell>
                  John
                </TableCell>
                <TableCell>
                  Doe
                </TableCell>
                <TableCell>
                  Brighton
                </TableCell>
                <TableCell>
                  01-May-1985
                </TableCell>
                <TableCell>
                  Disabled
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Snippet>
      </Example>
    );
  }
}
