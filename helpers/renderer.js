import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/app';

const renderer = req => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <App />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.client.js"></script>
      </body>
    </html>
  `;
};

export default renderer;
