import { colorPalette, colorAliases } from '../../../design-patterns/colors/_vars';

import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

export const palette = colorPalette.map((colors) =>
  colors.map(({ name }) =>
    <Paragraph textColor={ name }>{ name }</Paragraph>
  )
);

export const ui = colorAliases.map(({ heading, colors }) => [
  <Heading level={ 5 } snippetIgnore={ true }>{ heading }</Heading>,
  colors.map((group) =>
    group.map(({ name }) =>
      <Paragraph textColor={ name }>{ name }</Paragraph>
    )
  ),
]);

export const primary = (
  <Paragraph textColor="primary">Primary</Paragraph>
);
