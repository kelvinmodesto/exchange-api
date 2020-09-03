import debug from 'debug';
import http from 'http';

import app from '../app';

const normalizePort = (val: any) => {
  const p = parseInt(val, 10);

  if (p) return val;
  if (p >= 0) return p;

  return false;
};

const port = normalizePort(process.env.APP_PORT || '3000');
app.set('APP_PORT', port);

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port} `;
const server = http.createServer(app);

const onListening = () => {
  server.address();
  debug(`Listening on ${bind}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
