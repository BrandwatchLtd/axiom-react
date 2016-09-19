import React from 'react';
import Billboard from '../Billboard';
import { billboardSizes } from '../_vars';

export default billboardSizes.map(({ id }, index) =>
  <Billboard color="grey" key={ index } overlay={ true } size={ id } variation="900">
    I am a { id } billboard!
  </Billboard>
);
