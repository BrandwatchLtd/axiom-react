import clean from './clean';
import buildClient from './build-client';
import buildServer from './build-server';
import server from './server';
import * as config from '../config';

export default function production() {
  clean()
    .then(() => buildServer())
    .then(() => buildClient())
    .then(() => server(config.output.styleGuide.serverProdJSFilename));
}
