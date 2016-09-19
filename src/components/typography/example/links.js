import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Link from '../Link';

export default [
  <Heading level={ 3 } snippetIgnore={ true }>
    Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Heading>,
  <Paragraph snippetIgnore={ true }>
    Lorem ipsum dolor sit amet, <Link snippetIgnore={ true }>consectetur</Link> adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Paragraph>,
];
