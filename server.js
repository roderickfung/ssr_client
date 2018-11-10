import express from 'express';
import renderer from './helpers/renderer';

const server = express();
server.use(express.static('public'));

server.get('*', (req, res) => {
  res.send(renderer(req));
});

server.listen(3000, () => {
  console.log('Listening on Port:3000');
});
