const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./src/app').default;
const server = express();

server.get('/', (req, res) => {
  const content = renderToString(<App />);
  res.send(content);
});

server.listen(3000, () => {
  console.log('Listening on Port:3000');
});
