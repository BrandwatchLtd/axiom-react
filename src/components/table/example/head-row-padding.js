import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Table, TableHead, TableRow, TableCell, TableBody, Strong } from 'bw-axiom';

export default class TableExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Table: PropTypes.shape({
        rowPadding: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Table: { rowPadding } } = components;

    return (
      <Example name="Table Header Rows Padding">
        <Snippet>
          { rowPadding.values.map((size) =>
            <Table key={ size }>
              <TableHead rowPadding={ size }>
                <TableRow snippetSkip={ true }>
                  <TableCell>
                    <Strong>Id</Strong>
                  </TableCell>
                  <TableCell>
                    <Strong>First name</Strong>
                  </TableCell>
                  <TableCell>
                    <Strong>Last name</Strong>
                  </TableCell>
                  <TableCell>
                    <Strong>City</Strong>
                  </TableCell>
                  <TableCell>
                    <Strong>Birthday</Strong>
                  </TableCell>
                  <TableCell>
                    <Strong>Enabled</Strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody  snippetSkip={ true }>
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
          ) }
        </Snippet>
      </Example>
    );
  }
}
