import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableHeaderLabel from "./TableHeaderLabel";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

export default {
  title: "Components/Table",
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
        <TableHeaderLabel sortDirection="ascending">Column A</TableHeaderLabel>
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
  );
}
