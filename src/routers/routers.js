import React from 'react';
import { createHashRouter } from "react-router-dom";
import Loyout from "../component/loyout/loyout.js";
import Home from "../pages/home/home.js";
import Todo from "../pages/todo/todo.js";
import Swapi from "../pages/swapi/swapi.js";



export const menuItems = [
    { link: '/', path: '', caption: 'Home page', component: <Home /> },
    { link: '/about', path: 'about', caption: 'Todo', component: <Todo /> },
    { link: '/contact', path: 'contact', caption: 'SWAPI', component: <Swapi /> },
]



const router = createHashRouter([
    {
        path: "/",
        element: <Loyout />,
        children: [
            ...menuItems.map(({ path, component }) => ({ path, element: component }))
        ]
    }
])

export default router;