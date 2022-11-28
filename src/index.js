// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// // import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <App/>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


