import React from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Heading from '../../typography/Heading';
import { colorAliases, colorPalette } from '../../../design-patterns/colors/_vars';

export const palette = (
  <ButtonGroup snippetIgnore={ true }>
    { colorPalette.map((colors, t) =>
      colors.map(({ name }, b) =>
        <Button color={ name } key={ `${t}${b}` }>{ name }</Button>
      )
    ) }
  </ButtonGroup>
);

export const ui = colorAliases.map(({ heading, colors }, t) => [
  <Heading key={ `${t}` } level={ 5 } snippetSkip={ true }>{ heading }</Heading>,
  <ButtonGroup snippetIgnore={ true }>
    { colors.map((group, m) =>
      group.map(({ name }, b) =>
        <Button color={ name } key={ `${t}${m}${b}` }>{ name }</Button>
      )
    ) }
  </ButtonGroup>,
]);

export const primary = (
  <ButtonGroup snippetIgnore={ true }>
    <Button color="primary">Scheme primary</Button>
  </ButtonGroup>
);
