import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

import App from '../client/app.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

const html = (ctx: any) => {
  const body = (ReactDOMServer as any).renderToString(<App />);
  
  try {
    ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
      </head>
      <body >
        <div id="root">${body}</div>
        <script src="http://localhost:8080/static/client.js" defer></script>
      </body>
    </html>
    `;
  } catch (error) {
    console.log(error);
  }
};

export default html;