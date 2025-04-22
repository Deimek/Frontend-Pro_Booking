import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './routers/routers.js';
import { Provider } from "react-redux";
import store from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<Provider store={store}>
    <RouterProvider router={router} />
</Provider>)
    ;


//"homepage": "https://deimek.github.io/home-work_40",