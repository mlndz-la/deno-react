import React from "https://dev.jspm.io/react";
import ReactDOM from "https://dev.jspm.io/react-dom";

import App from "./client/App.tsx";

window.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  ReactDOM.hydrate(
    //@ts-ignore
    <App />,
    //@ts-ignore
    document.getElementById('root')
  );
});