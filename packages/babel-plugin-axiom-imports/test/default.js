/* eslint-disable no-console */

import { colors } from '@brandwatch/axiom-materials';

const productColors = Object.keys(colors.productColorNames);

const fn = (colors = productColors) => {
  console.log(colors);
};

fn();
