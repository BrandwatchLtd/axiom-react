```imports
import { shortNumber } from 'bw-axiom/common';
import { Table, Thead, Tbody, Tr, Th, Td } from 'bw-axiom/react';
```


# Standard Table

```jsx
<Table>
  <Thead>
    <Tr>
      <Th>Lorem</Th>
      <Th snippetIgnore isNumber={ true }>Ipsum</Th>
      <Th snippetIgnore isNumber={ true }>Dolar</Th>
      <Th snippetIgnore isNumber={ true }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody>
    <Tr>
      <Td>Consectetur adipiscing elit</Td>
      <Td snippetIgnore isNumber={ true }>{ shortNumber(923741, 2) }</Td>
      <Td snippetIgnore isNumber={ true }>{ shortNumber(238423, 2) }</Td>
      <Td snippetIgnore isNumber={ true }>{ shortNumber(324502, 2) }</Td>
    </Tr>

    <Tr snippetReplace>
      <Td>Fusce auctor dapibus</Td>
      <Td isNumber={ true }>{ shortNumber(194812, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(845101, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(123901, 2) }</Td>
    </Tr>

    <Tr snippetReplace>
      <Td>Duis feugiat condimentum velit</Td>
      <Td isNumber={ true }>{ shortNumber(982741, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(897419, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(109234, 2) }</Td>
    </Tr>

    <Tr snippetReplace>
      <Td>Velit campore</Td>
      <Td isNumber={ true }>{ shortNumber(123904, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(120941, 2) }</Td>
      <Td isNumber={ true }>{ shortNumber(491459, 2) }</Td>
    </Tr>
  </Tbody>
</Table>
```


# Stripy Table
```jsx
<Table striped={ true }>
  <Thead snippetReplace>
    <Tr>
      <Th>Lorem</Th>
      <Th isNumber={ true }>Ipsum</Th>
      <Th isNumber={ true }>Dolar</Th>
      <Th isNumber={ true }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody snippetReplace>
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
```


# Bordered Table

##### Horizontal borders
```jsx
<Table borders="h">
  <Thead snippetReplace>
    <Tr>
      <Th>Lorem</Th>
      <Th isNumber={ true }>Ipsum</Th>
      <Th isNumber={ true }>Dolar</Th>
      <Th isNumber={ true }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody snippetReplace>
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
```

##### Vertical borders
```jsx
<Table borders="v">
  <Thead snippetReplace>
    <Tr>
      <Th>Lorem</Th>
      <Th isNumber={ true }>Ipsum</Th>
      <Th isNumber={ true }>Dolar</Th>
      <Th isNumber={ true }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody snippetReplace>
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
```

##### Horizontal and vertical borders
```jsx
<Table borders={ true }>
  <Thead snippetReplace>
    <Tr>
      <Th>Lorem</Th>
      <Th isNumber={ true }>Ipsum</Th>
      <Th isNumber={ true }>Dolar</Th>
      <Th isNumber={ true }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody snippetReplace>
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
```


# Sortable tables
```jsx
<Table sortable={ true }>
  <Thead>
    <Tr>
      <Th snippetIgnore>Lorem</Th>
      <Th snippetIgnore isNumber={ true }>Ipsum</Th>
      <Th isNumber={ true } sorting={ 1 }>Dolar</Th>
      <Th isNumber={ true } sorting={ -1 }>Sit Amet</Th>
    </Tr>
  </Thead>

  <Tbody snippetReplace>
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
```
