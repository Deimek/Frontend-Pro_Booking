import React from 'react';
import ReactDOM from 'react-dom/client';
// import Loyout from './component/loyout/loyout.js';
// import { HashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from './routers/routers.js';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<RouterProvider router={router} />);


//"homepage": "https://deimek.github.io/home-work_40",