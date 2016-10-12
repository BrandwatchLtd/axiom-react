import React, { Component } from 'react';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import TableDemo from './TableDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Striped Table">
        <TableDemo sortable={ true }/>
        <Snippet>
          <Table renderSkip={ true } sortable={ true }>
            <Thead>
              <Tr>
                <Th sorting={ -1 }></Th>
                <Th sorting={ 1 }></Th>
                <Th></Th>
              </Tr>
            </Thead>
          </Table>
        </Snippet>
      </Example>
    );
  }
}
