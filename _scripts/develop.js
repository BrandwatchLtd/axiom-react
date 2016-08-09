import clean from './clean';
import watchClient from './watch-client';
import watchServer from './watch-server';
import server from './server';
import * as config from '../config';

export default function develop() {
  clean()
    .then(() => watchServer())
    .then(() => watchClient())
    .then(() => server(config.output.styleGuide.serverDevJSFilename));
}
