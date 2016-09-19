import React from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Heading from '../../typography/Heading';
import { colorAliases, colorPalette } from '../../../design-patterns/colors/_vars';

export const palette = (
  <LabelGroup snippetIgnore={ true }>
    { colorPalette.map((colors) =>
      colors.map(({ name }) =>
        <Label color={ name }>{ name }</Label>
      )
    ) }
  </LabelGroup>
);

export const ui = colorAliases.map(({ heading, colors }, key) => [
  <Heading key={ key } level={ 5 } snippetSkip={ true }>{ heading }</Heading>,
  <LabelGroup snippetIgnore={ true }>
    { colors.map((group) =>
      group.map(({ name }) =>
        <Label color={ name }>{ name }</Label>
      )
    ) }
  </LabelGroup>,
]);

export const primary = (
  <LabelGroup snippetIgnore={ true }>
    <Label color="primary">Scheme primary</Label>
  </LabelGroup>
);
