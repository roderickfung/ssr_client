import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import serverStore from './helpers/store';

const server = express();
server.use(express.static('public'));

server.get('*', (req, res) => {
  const store = serverStore();

  // logic to initialize and load data into the server store

  res.send(renderer(req, store));
});

server.listen(3000, () => {
  console.log('Listening on Port:3000');
});
