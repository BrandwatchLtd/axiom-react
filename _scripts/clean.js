/* eslint-disable no-console */
import del from 'del';
import * as config from '../config';

export default function clean() {
  console.log('Ax:: Clean [1/2]');

  return del([`${config.paths.output}/**`, `!${config.paths.output}`])
    .then(() => console.log('Ax:: Clean [2/2]'));
}
