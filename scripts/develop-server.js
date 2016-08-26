import watchServer from './watch-server';
import server from './server';
import * as config from '../config';

export default function develop() {
    watchServer()
    .then(() => server(config.server.filename));
}
