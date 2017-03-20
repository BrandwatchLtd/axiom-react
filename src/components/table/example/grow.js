import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Table, TableHead, TableRow, TableCell, TableBody, Strong } from 'bw-axiom';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Grow">
        <Snippet>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell snippetSkip={ true }>
                  <Strong>Id</Strong>
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
                <TableCell grow={ true }>
                  <Strong snippetReplace={ true }>Birthday</Strong>
                </TableCell>
                <TableCell snippetSkip={ true }>
                  <Strong>Enabled</Strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody snippetSkip={ true }>
              <TableRow>
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
              <TableRow>
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
