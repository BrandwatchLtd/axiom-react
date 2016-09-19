import React from 'react';
import Select from '../Select';

import { default as SelectConfigurableDemo } from './SelectConfigurableDemo';


export const title = 'Select';
export const id = 'select';
export const location = 'bw-axiom/components/select';
export const components = [ Select ];

export const examples = [{
  name: 'Select configurable demo',
  snippet: <SelectConfigurableDemo snippetSkip={ true } />,
}];
