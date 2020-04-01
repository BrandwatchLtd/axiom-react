import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderLabel,
} from '@brandwatch/axiom-components';

export default class PackagesTable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Table {...rest} space="x2">
        <TableHeader>
          <TableHeaderLabel>Package</TableHeaderLabel>
          <TableHeaderLabel>Version</TableHeaderLabel>
          <TableHeaderLabel shrink />
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
    );
  }
}
