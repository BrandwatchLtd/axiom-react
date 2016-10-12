import React, { Component } from 'react';
import Table from '../Table';
import TableDemo from './TableDemo';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Striped Table">
        <TableDemo striped={ true }/>
        <Snippet>
          <Table renderSkip={ true } striped={ true } />
        </Snippet>
      </Example>
    );
  }
}
