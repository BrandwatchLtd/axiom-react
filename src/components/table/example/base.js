import React, { Component } from 'react';
import Table from '../Table';
import Thead from '../Thead';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Th from '../Th';
import Td from '../Td';

import TableDemo from './TableDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Standard Table">
        <TableDemo />
        <Snippet>
          <Table renderSkip={ true }>
            <Thead>
              <Tr>
                <Th>...</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>...</Td>
              </Tr>
            </Tbody>
          </Table>
        </Snippet>
      </Example>
    );
  }
}
