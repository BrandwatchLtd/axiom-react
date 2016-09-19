import React from 'react';
import Paragraph from '../Paragraph';
import { breakpointIds } from '../../../design-patterns/layout/_vars';

export const base = [
  <Paragraph textLeft={ true }>This text is left aligned</Paragraph>,
  <Paragraph textCenter={ true }>This text is center aligned</Paragraph>,
  <Paragraph textRight={ true }>This text is right aligned</Paragraph>,
];

export const responsive = breakpointIds.map((id) => [
  <Paragraph textLeft={ id } textRight={ true }>
    This text is left aligned at { id.toUpperCase() }
  </Paragraph>,
  <Paragraph textCenter={ id }>
    This text is center aligned at { id.toUpperCase() }
  </Paragraph>,
  <Paragraph textRight={ id }>
    This text is right aligned at { id.toUpperCase() }
  </Paragraph>,
]);
