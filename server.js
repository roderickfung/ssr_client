import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import router from 'lib/routes';
import renderer from 'helpers/renderer';
import serverStore from 'helpers/store';

const server = express();

server.use(express.static('public'));
server.get('*', (req, res) => {
  const store = serverStore();
  matchRoutes(router, req.path);
  res.send(renderer(req, store));
});

server.listen(3000, () => {
  console.log('Listening on Port:3000');
});
