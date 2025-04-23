import React from 'react';
import { createHashRouter } from "react-router-dom";
import Loyout from "../component/loyout/loyout.js";
import Home from "../pages/home/home-content.js";
import About from '../pages/About/about.js';
import Hotels from '../pages/hotels/hotels.js';



export const menuItems = [
    { link: '/', index: true, caption: 'Home', component: <Home />, isMenuItems: true },
    { link: '/about', path: 'about', caption: 'About', component: <About />, isMenuItems: true },
    { link: '/hotels', path: 'hotels', caption: 'Hotels', component: <Hotels /> },
]



const router = createHashRouter([
    {
        path: "/",
        element: <Loyout />,
        children: [
            ...menuItems.map(({ path, index, component }) =>
                index ? { index: true, element: component } : { path, element: component })
        ]
    }
])

export default router;