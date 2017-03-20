import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Table, TableHead, TableRow, TableCell, TableBody, Strong } from 'bw-axiom';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Table">
        <Snippet>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Strong snippetReplace={ true }>Id</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>First name</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>Last name</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>City</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>Birthday</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>Enabled</Strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  1
                </TableCell>
                <TableCell snippetSkip={ true }>
                  Max
                </TableCell>
                <TableCell snippetSkip={ true }>
                  Mustermann
                </TableCell>
                <TableCell snippetSkip={ true }>
                  Stuttgart
                </TableCell>
                <TableCell snippetSkip={ true }>
                  17-Apr-1990
                </TableCell>
                <TableCell snippetSkip={ true }>
                  Enabled
                </TableCell>
              </TableRow>
              <TableRow snippetSkip={ true }>
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
