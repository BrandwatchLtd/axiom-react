import Table from '../Table';
import Thead from '../Thead';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Th from '../Th';
import Td from '../Td';

import createTableExample from './createTableExample';

export const title = 'Table';
export const id = 'table';
export const location = 'bw-axiom/components/table';
export const components = [ Table, Thead, Tbody, Tr, Th, Td ];

export const examples = [{
  name: 'Standard Table',
  snippet: createTableExample(),
}, {
  name: 'Striped Table',
  snippet: createTableExample({ striped: true }),
}, {
  name: 'Bordered Table',
  snippet: [{
    name: 'Horizontal',
    snippet: createTableExample({ borders: 'h' }),
  }, {
    name: 'Vertical',
    snippet: createTableExample({ borders: 'v' }),
  }, {
    name: 'Horizontal and Vertical',
    snippet: createTableExample({ borders: true }),
  }],
}, {
  name: 'Sortable Table',
  snippet: createTableExample({ sortable: true }),
}];
