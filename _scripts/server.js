/* eslint-disable no-console */
import path from 'path';
import forever from 'forever';
import * as config from '../config';

export default function server(filename) {
  console.log('Ax:: Starting server...');

  return forever.start(path.join(config.output.path, filename), {
    minUptime: 1000,
    spinSleepTime: 1000,
  });
}
