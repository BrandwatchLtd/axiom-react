import React, { Component } from 'react';
import Table from '../Table';
import TableDemo from './TableDemo';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TableExample extends Component {
  render() {
    return (
      <Example name="Bordered Table">
        <Heading level={ 5 }>Hoizontal boreders</Heading>
        <TableDemo borders="h" />
        <Snippet>
          <Table borders="h" renderSkip={ true } />
        </Snippet>

        <Heading level={ 5 }>Vertical boreders</Heading>
        <TableDemo borders="v" />
        <Snippet>
          <Table borders="v" renderSkip={ true } />
        </Snippet>

        <Heading level={ 5 }>Horizontal and Vertical boreders</Heading>
        <TableDemo borders={ true } />
        <Snippet>
          <Table borders={ true } renderSkip={ true } />
        </Snippet>
      </Example>
    );
  }
}
