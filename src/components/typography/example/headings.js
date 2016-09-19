import React from 'react';
import Heading from '../Heading';
import Strong from '../Strong';
import Weak from '../Weak';

export default Heading.__ax_propTypes.level.oneOf.map((level) =>
  <Heading level={ level }>
    h{ level }.
    <Weak> Weak </Weak>
    Standard
    <Strong> Strong </Strong>
  </Heading>
);
