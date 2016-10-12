import React, { Component } from 'react';
import { shortNumber } from '../../../design-patterns/numbers/numbers';
import Table from '../Table';
import Thead from '../Thead';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Th from '../Th';
import Td from '../Td';

/* eslint-disable react/prop-types */
export default class TableDemo extends Component {
  render() {
    const { sortable } = this.props;
    const header1Props = sortable ? { sorting: -1 } : {};
    const header2Props = sortable ? { sorting: 1 } : {};

    return (
      <Table { ...this.props }>
        <Thead>
          <Tr>
            <Th>Lorem</Th>
            <Th isNumber={ true }>Ipsum</Th>
            <Th isNumber={ true } { ...header1Props }>Dolar</Th>
            <Th isNumber={ true } { ...header2Props }>Sit Amet</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>Consectetur adipiscing elit</Td>
            <Td isNumber={ true }>{ shortNumber(923741, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(238423, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(324502, 2) }</Td>
          </Tr>

          <Tr>
            <Td>Fusce auctor dapibus</Td>
            <Td isNumber={ true }>{ shortNumber(194812, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(845101, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(123901, 2) }</Td>
          </Tr>

          <Tr>
            <Td>Duis feugiat condimentum velit</Td>
            <Td isNumber={ true }>{ shortNumber(982741, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(897419, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(109234, 2) }</Td>
          </Tr>

          <Tr>
            <Td>Velit campore</Td>
            <Td isNumber={ true }>{ shortNumber(123904, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(120941, 2) }</Td>
            <Td isNumber={ true }>{ shortNumber(491459, 2) }</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
}
/* eslint-enable react/prop-types */
