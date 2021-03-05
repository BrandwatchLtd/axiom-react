import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableHeaderLabel from "./TableHeaderLabel";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

export default {
  title: "Table",
  component: Table,
  subcomponents: {
    TableHeader,
    TableHeaderLabel,
    TableRow,
    TableCell,
    TableBody,
  },
};

export function Default() {
  return (
    <Table>
      <TableHeader>
        <TableHeaderLabel sortDirection="ascending" onClick={() => {}}>
          Column A
        </TableHeaderLabel>
        <TableHeaderLabel>lower case</TableHeaderLabel>
        <TableHeaderLabel wrap={true}>
          Super long Column C label with wrapping Lorem ipsum
        </TableHeaderLabel>
        <TableHeaderLabel>CAPS LOCK</TableHeaderLabel>
        <TableHeaderLabel>Title Case Please</TableHeaderLabel>
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
  );
}
