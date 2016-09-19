import React from 'react';
import Paragraph from '../Paragraph';
import Small from '../Small';
import Strong from '../Strong';
import Weak from '../Weak';

export const standard = (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.
  </Paragraph>
);

export const strong = (
  <Paragraph>
    <Strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Strong>
  </Paragraph>
);

export const weak = (
  <Paragraph>
    <Weak>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Weak>
  </Paragraph>
);

export const small = (
  <Paragraph>
    <Small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, est dapibus aliquet tristique, ante orci porta ligula, sit amet bibendum diam lectus eu erat.</Small>
  </Paragraph>
);
